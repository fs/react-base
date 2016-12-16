import Storage from 'lib/storage';
import sessionSource from 'sources/session';
import config from 'config';

const STORAGE_KEY = config.storageKey;

export const createUser = user => {
  return dispatch => {
    return sessionSource.create(user).then(result => {
      Storage.set(STORAGE_KEY, result);
      dispatch(result);
    });
  };
}

export const deleteUser = user => {
  return dispatch => {
    sessionSource.delete(user);
    Storage.remove(STORAGE_KEY);
    dispatch();
  };
}
