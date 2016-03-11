import React, { Component, PropTypes } from 'react'

// Used to render the login screen
export default class LoginScreen extends Component {
  render () {
    return (
      <div>
        <h1> LOGIN SCREEN </h1>
        {this.props.isAuthenticated
          ? <p>Hey, you're actually logged in :)</p>
          : <LoginButton {...this.props} login={this.props.actions.authenticate}/>}
      </div>
    )
  }
}
LoginScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  credentials: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

// Used to render the login button
class LoginButton extends Component {
  handleClick () {
    // Trigger a new request if we aren't already fetching
    if (!this.props.isFetching) {
      this.props.login()
    }
  }

  render () {
    const cssClass = this.props.isFetching ? 'fetching button-primary' : 'button-primary'
    const content = this.props.isFetching ? 'Logging in...' : 'Login'
    return <button className={cssClass} onClick={this.handleClick.bind(this)}>Login</button>
  }
}
LoginButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
}
