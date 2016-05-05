import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import SignupActions from 'actions/signup';
import ModalStore from 'stores/abstract/modal';

@createStore(Alt)
export default class SignupStore extends ModalStore {
  defaultProps = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor() {
    super();

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
