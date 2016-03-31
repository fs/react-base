import Alt from 'alt_flux';
import sessionSource from 'sources/session';

export default Alt.createActions(class SessionActions {
  create(user) {
    return (dispatch) => {
      sessionSource.create(user).then(result => dispatch(result));
    };
  }

  destroy(user) {
    return (dispatch) => {
      sessionSource.delete(user);
      dispatch(user);
    };
  }
});
