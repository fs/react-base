import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class SigninActions {
  show() {
    return true;
  }

  hide() {
    return true;
  }

  reset() {
    return true;
  }

  setEmail(email) {
    return email;
  }

  setPassword(password) {
    return password;
  }

  create(user) {
    return user;
  }
}
