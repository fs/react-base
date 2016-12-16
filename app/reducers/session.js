import * as ActionTypes from 'actions/session';
import Storage from 'lib/storage';
import config from 'config';

const STORAGE_KEY = config.storageKey;

const initialState = {
  currentUser: Storage.get(STORAGE_KEY) || {}
}

export default function session(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.CREATE_USER:
    return {
      ...state,
      currentUser: {
        ...state.user,
        [action.name]: action.value
      }
    };
  case ActionTypes.DELETE_USER:
    return { currentUser: {} };
  default:
    return state;
  }
}
