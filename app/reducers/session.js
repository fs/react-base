import * as ActionTypes from 'actions/session';
import Storage from 'lib/storage';
import config from 'config';

const STORAGE_KEY = config.storageKey;

const initialState = {
  isFetching: false,
  isAuthenticated: Storage.get(STORAGE_KEY) ? true : false,
  currentUser: Storage.get(STORAGE_KEY) || {}
}

export default function session(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.LOGIN_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case ActionTypes.LOGIN_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currentUser: action.user,
      isAuthenticated: true
    };
  case ActionTypes.LOGOUT_SUCCESS:
    return {
      ...state,
      currentUser: {},
      isAuthenticated: false
    }
  default:
    return state;
  }
}
