import SessionStore from 'stores/session';
import config from 'config';

export default class Session {
  static store() {
    return SessionStore;
  }

  static currentUser() {
    return this.store().state.currentUser;
  }

  static loggedIn() {
    return Object.keys(this.currentUser()).length !== 0;
  }

  static get token() {
    return this.currentUser()[config.session.tokenKey];
  }

  static get email() {
    return this.currentUser()[config.session.emailKey];
  }
}
