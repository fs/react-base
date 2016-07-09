import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import SignupActions from 'actions/signup';
import ApplicationActions from 'actions/application';

@createStore(Alt)
export default class SignupStore {
  defaultProps = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor() {
    this.user = Object.assign({}, this.defaultProps);

    this.bindListeners({
      setValue: SignupActions.SET_VALUE,
      reset: ApplicationActions.CLOSE_MODAL
    });
  }

  setValue(obj) {
    this.user[obj.name] = obj.value;
  }

  reset() {
    this.user = Object.assign({}, this.defaultProps);
  }
}
