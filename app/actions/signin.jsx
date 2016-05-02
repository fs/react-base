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

  setValue(name, value) {
    return { name, value };
  }

  create(user) {
    return user;
  }
}
