import store from 'stores/application';
import config from 'config';

export default class CurrentUser {
  static currentUser() {
    return store.getState().session.currentUser;
  }

  static loggedIn() {
    return !!Object.keys(this.currentUser()).length;
  }

  static get token() {
    return this.currentUser()[config.session.tokenKey];
  }

  static get email() {
    return this.currentUser()[config.session.emailKey];
  }
}
