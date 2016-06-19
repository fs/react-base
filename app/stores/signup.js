import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import { mixin } from 'core-decorators';
import { ModalStoreMixin } from 'mixins/modal/store';
import SignupActions from 'actions/signup';

@createStore(Alt)
@mixin(ModalStoreMixin)
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
      show: SignupActions.SHOW,
      hide: SignupActions.HIDE,
      reset: SignupActions.RESET,
      setValue: SignupActions.SET_VALUE
    });
  }

  reset() {
    this.user = Object.assign({}, this.defaultProps);
  }

  setValue(obj) {
    this.user[obj.name] = obj.value;
  }
}
