import React, { Component, PropTypes } from 'react'

// Used to render the login screen
export default class ProfileScreen extends Component {

  render () {
    const profileBtn = (
      <div>
        <button onClick={this.props.getProfile.bind(null)}
          className='button button-primary'>
          Load Profile
        </button>

        <p>
        {this.props.failed
          ? 'Failed to load profile, try again?'
          : ''}
        </p>
      </div>
    )

    return (
      <div>
        <h1>Profile</h1>
        {this.props.profile.name
          ? <Profile name={this.props.profile.name}/>
          : profileBtn}
      </div>
    )
  }
}
ProfileScreen.propTypes = {
  getProfile: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  failed: PropTypes.bool.isRequired
}

export class Profile extends Component {
  render () {
    return (
      <div>
        <h2> Name: {this.props.name} </h2>
      </div>
    )
  }
}
Profile.propTypes = {
  name: PropTypes.string.isRequired
}
