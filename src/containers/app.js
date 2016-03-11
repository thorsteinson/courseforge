import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/profile-actions'
import ProfileScreen from '../components/profile-screen'

class App extends Component {
  render () {
    const { state, actions } = this.props
    return (
      <div>
        <ProfileScreen {...state.profile}
          getProfile={actions.getProfile} />
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
