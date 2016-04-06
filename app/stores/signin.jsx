import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import SigninActions from 'actions/signin';

@createStore(Alt)
export default class SigninStore {
  constructor() {
    this.showModal = false;
    this.user = {
      email: '',
      password: ''
    };

    this.bindListeners({
      show: SigninActions.SHOW,
      hide: SigninActions.HIDE,
      reset: SigninActions.RESET,
      setEmail: SigninActions.SET_EMAIL,
      setPassword: SigninActions.SET_PASSWORD
    });
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }

  reset() {
    this.user = {
      email: '',
      password: ''
    };
  }

  setEmail(email) {
    this.user.email = email;
  }

  setPassword(password) {
    this.user.password = password;
  }
}
