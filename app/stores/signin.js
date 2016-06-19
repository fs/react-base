import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import { mixin } from 'core-decorators';
import { ModalStoreMixin } from 'mixins/modal/store';
import SigninActions from 'actions/signin';

@createStore(Alt)
@mixin(ModalStoreMixin)
export default class SigninStore {
  defaultProps = {
    email: '',
    password: ''
  }

  constructor() {
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
