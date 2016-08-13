import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import session from 'services/session';
import signupSource from 'sources/signup';

@createActions(Alt)
export default class SignupActions {
  setValue(name, value) {
    return { name, value };
  }

  create(user) {
    return (dispatch) => {
      signupSource.create(user).then((result) => {
        session.create(result);
        dispatch(result);
      });
    };
  }
}
