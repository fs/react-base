import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { mixin } from 'core-decorators';
import { ModalActionsMixin } from 'mixins/modal/actions';

@createActions(Alt)
@mixin(ModalActionsMixin)
export default class SigninActions {
  setValue(name, value) {
    return { name, value };
  }
}
