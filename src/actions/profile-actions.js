import {
  PROFILE_REQ_START, PROFILE_REQ_FAIL, PROFILE_REQ_SUCCESS
} from '../constants/action-types'
import * as api from '../constants/api'

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

    return fetch(`/users/me`)
      .then((response) => response.json())
      .then((profile) => dispatch(success(profile)))
      .catch((err) => dispatch(fail(err)))
  }
}
