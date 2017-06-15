import storage from 'lib/storage';
import config from 'config';

export default class SessionStorage {
  static currentUser() {
    return storage.get(config.storage.sessionKey) || {};
  }

  static loggedIn() {
    return Object.keys(this.currentUser()).length !== 0;
  }

  static set(user) {
    storage.set(config.storage.sessionKey, user);
  }

  static remove() {
    storage.remove(config.storage.sessionKey);
  }
}
