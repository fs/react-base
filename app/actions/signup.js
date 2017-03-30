import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import session from 'services/session';
import signUpSource from 'sources/signup';

@createActions(Alt)
export default class SignupActions {
  setValue(name, value) {
    return { name, value };
  }

  create(session) {
    return (dispatch) => {
      signUpSource.create(session).then((result) => {
        session.create(result);
        dispatch(result);
      });
    };
  }
}
