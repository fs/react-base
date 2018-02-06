import { createAction } from 'redux-actions';
import sessionSource from 'sources/session';
import usersSource from 'sources/users';
import sessionStorage from 'services/sessionStorage';
import appHistory from 'services/history';
import paths from 'helpers/routes';

export const LOAD_DATA = 'LOAD_DATA';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const loadData = createAction(LOAD_DATA);
export const setUser = createAction(SET_USER);
export const removeUser = createAction(REMOVE_USER);

export const signinUser = user =>
  async dispatch => {
    dispatch(loadData());

    const result = await sessionSource.signin(user);

    sessionStorage.set(result);
    dispatch(setUser(result));
    appHistory.push(paths.home());
  };

export const signupUser = user =>
  async dispatch => {
    dispatch(loadData());

    const result = await usersSource.create(user);

    sessionStorage.set(result);
    dispatch(setUser(result));
    appHistory.push(paths.home());
  };

export const logoutUser = user =>
  async dispatch => {
    await sessionSource.logout(user);
    sessionStorage.remove();
    dispatch(removeUser());
  };
