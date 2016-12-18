import session from 'services/session';
import signupSource from 'sources/signup';

export const SET_VALUE = 'SET_VALUE';
export const CREATE = 'CREATE';
export const RECEIVE_USER = 'RECEIVE_USER';

export const setValue = (name, value) => ({
  type: SET_VALUE,
  name,
  value
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const createUser = (user) => {
  return dispatch => {
    return signupSource.create(user).then(result => {
      session.create(result);
      dispatch(receiveUser(result));
    });
  };
};
