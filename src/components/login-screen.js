import React, { Component, PropTypes } from 'react'

// Used to render the login screen
export default class LoginScreen extends Component {
  render () {
    return (
      <div>
        <h1> LOGIN SCREEN </h1>
        {this.props.isAuthenticated
          ? <p>Hey, you're actually logged in :)</p>
          : <button className='button-primary'>Login</button>}
      </div>
    )
  }
}
LoginScreen.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  credentials: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
