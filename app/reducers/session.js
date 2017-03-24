import * as ActionTypes from 'actions/session'
import Storage from 'lib/storage'
import config from 'config'

const STORAGE_KEY = config.storageKey

const initialState = {
  isLoading: false,
  isAuthenticated: Storage.get(STORAGE_KEY) ? true : false,
  currentUser: Storage.get(STORAGE_KEY) || {}
}

export default function session(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SESSION_CREATE_REQUEST:
    return {
      ...state,
      isLoading: true
    }
  case ActionTypes.SESSEION_CREATE_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currentUser: action.user,
      isAuthenticated: true
    }
  case ActionTypes.SESSION_DESTROY_SUCCESS:
    return {
      ...state,
      currentUser: {},
      isAuthenticated: false
    }
  default:
    return state
  }
}
