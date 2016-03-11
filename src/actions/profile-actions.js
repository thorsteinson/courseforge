import {
  PROFILE_REQ_START, PROFILE_REQ_FAIL, PROFILE_REQ_SUCCESS
} from '../constants/action-types'

function start () {
  return {
    type: PROFILE_REQ_START
  }
}

function success (profile) {
  return {
    type: PROFILE_REQ_SUCCESS,
    profile
  }
}

function fail (details) {
  return {
    type: PROFILE_REQ_FAIL,
    details
  }
}

export function getProfile () {
  return function (dispatch) {
    dispatch(start())

    const authHeaders = new Headers()
    const myInit = {
      method: 'GET',
      credentials: 'same-origin', // Cookie will NOT be sent without this option
      headers: new Headers({
        'Cookie': document.cookie,
      })
    }
    console.log(myInit)
    return fetch('/users/me', myInit)
      .then((response) => {
        const res = response.json()
        return res
      })
      .then((profile) => dispatch(success(profile)))
      .catch((err) => {
        dispatch(fail(err))
      })
  }
}
