import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ModalActions from 'actions/abstract/modal';
import SessionActions from 'actions/session';
import signupSource from 'sources/signup';

@createActions(Alt)
export default class SignupActions extends ModalActions {
  setValue(name, value) {
    return { name, value };
  }

  create(user) {
    return (dispatch) => {
      signupSource.create(user).then((result) => {
        SessionActions.create(result);
        dispatch(result);
      });
    };
  }
}
