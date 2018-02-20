import { handleActions } from 'redux-actions';
import sessionStorage from 'services/sessionStorage';
import { LOAD_DATA, SET_USER, REMOVE_USER } from 'actions/session';

const initialState = {
  isLoading: false,
  loggedIn: sessionStorage.loggedIn(),
  currentUser: sessionStorage.currentUser(),
};

export default handleActions({
  [LOAD_DATA]: state => ({
    ...state,
    isLoading: true,
  }),
  [SET_USER]: (state, { payload }) => ({
    isLoading: false,
    loggedIn: true,
    currentUser: payload,
  }),
  [REMOVE_USER]: state => ({
    isLoading: false,
    loggedIn: false,
    currentUser: {},
  }),
}, initialState);
