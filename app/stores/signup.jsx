import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import SignupActions from 'actions/signup';
import ModalStore from 'stores/abstract/modal';

@createStore(Alt)
export default class SignupStore extends ModalStore {
  constructor() {
    super();

    this.user = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };

    this.bindListeners({
      show: SignupActions.SHOW,
      hide: SignupActions.HIDE,
      reset: SignupActions.RESET,
      setValue: SignupActions.SET_VALUE
    });
  }

  reset() {
    this.user = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  setValue(obj) {
    this.user[obj.name] = obj.value;
  }
}
