import { handleActions } from 'redux-actions'
import actionTypes from 'constants/session'
import sessionStorage from 'services/sessionStorage'

const {
  LOAD_DATA,
  SET_USER,
  REMOVE_USER
} = actionTypes;

const initialState = {
  isLoading: false,
  loggedIn: sessionStorage.loggedIn(),
  currentUser: sessionStorage.currentUser()
}

export default handleActions({
  [LOAD_DATA]: (state) => ({
    ...state,
    isLoading: true
  }),
  [SET_USER]: (state, { payload }) => ({
    isLoading: false,
    loggedIn: true,
    currentUser: payload
  }),
  [REMOVE_USER]: (state) => ({
    isLoading: false,
    loggedIn: false,
    currentUser: {}
  })
}, initialState)
