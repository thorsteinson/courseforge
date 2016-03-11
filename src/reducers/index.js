import { default as _ } from 'lodash'
import { combineReducers } from 'redux'

import {
  LOGIN_REQUEST_START, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS
} from '../constants/action-types'

import {
  PROFILE_REQ_START, PROFILE_REQ_FAIL, PROFILE_REQ_SUCCESS
} from '../constants/action-types'

const initialAuthState = {
  isFetching: false,
  isAuthenticated: false,
  credentials: {}
}

function authentication (state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_START:
      return _.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case LOGIN_REQUEST_SUCCESS:
      return _.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        credentials: {
          // TODO: These should be passed back eventually
        }
      })
    case LOGIN_REQUEST_FAIL:
      return _.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        credentials: {}
      })
    default:
      return state
  }
}

const initProfileState = {
  isFetching: false,
  profile: {},
  failed: false
}

function profile (state = initProfileState, action) {
  switch (action.type) {
    case PROFILE_REQ_START:
      return _.assign({}, state, {
        isFetching: true,
        failed: false // Reset failure status
      })
    case PROFILE_REQ_SUCCESS:
      return _.assign({}, state, {
        isFetching: false,
        profile: action.profile
      })
    case PROFILE_REQ_FAIL:
      return _.assign({}, state, {
        isFetching: false,
        failed: true // Inform components that something has gone wrong
      })

    default:
      return state
  }
}

const rootReducer = combineReducers({
  authentication,
  profile
})

export default rootReducer
