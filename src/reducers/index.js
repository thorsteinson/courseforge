import { default as _ } from 'lodash'
import { combineReducers } from 'redux'

import {
  LOGIN_REQUEST_START, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS
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

const rootReducer = combineReducers({
  authentication
})

export default rootReducer
