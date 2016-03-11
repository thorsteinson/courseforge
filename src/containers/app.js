import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/login-actions'
import LoginScreen from '../components/login-screen'

class App extends Component {
  render () {
    const { state, actions } = this.props
    const authState = state.authentication
    return (
      <div>
        <LoginScreen {...state.authentication}
          actions={actions} />
      </div>
    )
  }
}
App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
