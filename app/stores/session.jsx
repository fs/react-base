import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import Storage from 'services/storage';
import SessionActions from 'actions/session';
import config from 'config';

const STORAGE_KEY = config.storageKey;

@createStore(Alt)
export default class SessionStore {
  constructor() {
    this.currentUser = Storage.get(STORAGE_KEY) || {};

    this.bindListeners({
      create: SessionActions.CREATE,
      destroy: SessionActions.DESTROY
    });
  }

  create(user) {
    this.currentUser = user;
    this.unsetPassword();
    Storage.set(STORAGE_KEY, user);
  }

  destroy() {
    this.currentUser = {};
    Storage.remove(STORAGE_KEY);
  }

  unsetPassword() {
    delete this.currentUser.password;
  }
}
