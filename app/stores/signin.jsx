import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import SigninActions from 'actions/signin';
import ModalStore from 'stores/abstract/modal';

@createStore(Alt)
export default class SigninStore extends ModalStore {
  defaultProps = {
    email: '',
    password: ''
  }

  constructor() {
    super();

    this.user = Object.assign({}, this.defaultProps);

    this.bindListeners({
      show: SigninActions.SHOW,
      hide: SigninActions.HIDE,
      reset: SigninActions.RESET,
      setValue: SigninActions.SET_VALUE
    });
  }

  reset() {
    this.user = Object.assign({}, this.defaultProps);
  }

  setValue(obj) {
    this.user[obj.name] = obj.value;
  }
}
