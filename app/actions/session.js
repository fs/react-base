import { createActions } from 'redux-actions';
import sessionSource from 'sources/session';
import usersSource from 'sources/users';
import actionTypes from 'constants/session';
import sessionStorage from 'services/sessionStorage';
import appHistory from 'services/history';
import { paths } from 'helpers/routes';

const { LOAD_DATA, SET_USER, REMOVE_USER } = actionTypes;

const actions = createActions(
  LOAD_DATA,
  SET_USER,
  REMOVE_USER
);

const signinUser = user =>
  dispatch => {
    dispatch(actions.loadData());

    return sessionSource.signin(user).then(result => {
      sessionStorage.set(result);
      dispatch(actions.setUser(result));
      appHistory.push(paths.home());
    });
  };

const signupUser = user =>
  dispatch => {
    dispatch(actions.loadData());

    return usersSource.create(user).then(result => {
      sessionStorage.set(result);
      dispatch(actions.setUser(result));
      appHistory.push(paths.home());
    });
  };

const logoutUser = user =>
  dispatch => {
    return sessionSource.logout(user).then(() => {
      sessionStorage.remove();
      dispatch(actions.removeUser());
    });
  };

export default { ...actions, signinUser, signupUser, logoutUser };
