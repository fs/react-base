import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ModalActions from 'actions/abstract/modal';

@createActions(Alt)
export default class SigninActions extends ModalActions {
  setValue(name, value) {
    return { name, value };
  }
}
