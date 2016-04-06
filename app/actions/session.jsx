import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import sessionSource from 'sources/session';

@createActions(Alt)
export default class SessionActions {
  create(user) {
    return (dispatch) => {
      sessionSource.create(user).then(result => dispatch(result));
    };
  }

  delete(user) {
    return (dispatch) => {
      sessionSource.delete(user);
      dispatch(user);
    };
  }
}
