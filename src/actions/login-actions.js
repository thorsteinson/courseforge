import * as types from '../constants/action-types'
import * as api from '../constants/api'

// Used to make a login request
// No parameters because we use an OAuth flow
export function makeRequest () {
  return {
    type: types.LOGIN_REQUEST_START
  }
}

// Indicates a successful login
export function success () {
  return {
    type: types.LOGIN_REQUEST_SUCCESS
  }
}

// Indicates a failed login request, with a reason.
// Either the server is down, or the authentication failed
export function fail (details) {
  return {
    type: types.LOGIN_REQUEST_FAIL,
    details
  }
}

// This is a thunk action creator
export function authenticate () {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that we are attempting a login
    dispatch(makeRequest())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`${api.BASE_URI}/login`)
      // Parses the response into json
      .then((response) => response.json())
      .then((json) =>
        // Now update the state of the application with the success notification
        dispatch(success())
      ).catch((err) => {
        // Now update the state of teh app with a failure notification
        dispatch(fail(err.details))
      })
  }
}
