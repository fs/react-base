import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import Storage from 'lib/storage';
import sessionSource from 'sources/session';
import config from 'config';

const STORAGE_KEY = config.storageKey;

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      sessionSource.create(user).then(result => {
        Storage.set(STORAGE_KEY, result);
        dispatch(result);
      });
    };
  }

  delete(user) {
    return (dispatch) => {
      sessionSource.delete(user);
      Storage.remove(STORAGE_KEY);
      dispatch(user);
    };
  }
}
