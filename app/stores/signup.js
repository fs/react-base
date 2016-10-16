import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import SignupActions from 'actions/signup';

@createStore(Alt)
export default class SignupStore {
  static displayName = 'SignupStore'

  defaultProps = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor() {
    this.user = Object.assign({}, this.defaultProps);

    this.bindListeners({
      setValue: SignupActions.SET_VALUE
    });
  }

  setValue(obj) {
    this.user[obj.name] = obj.value;
  }

  reset() {
    this.user = Object.assign({}, this.defaultProps);
  }
}
