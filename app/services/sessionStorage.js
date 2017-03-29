import storage from 'lib/storage';
import config from 'config';

export default class SessionStorage {
  static currentUser() {
    return storage.get(config.storageKey) || {};
  }

  static loggedIn() {
    return Object.keys(this.currentUser()).length !== 0;
  }

  static set(user) {
    storage.set(config.storageKey, user);
  }

  static remove() {
    storage.remove(config.storageKey);
  }
}
