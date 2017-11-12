import { connect } from 'react-redux';
import sessionActions from 'actions/session';
import { openModal } from 'actions/modal';
import Application from 'components/application';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(sessionActions.logoutUser(user)),
  signin: () => dispatch(openModal({ name: 'signin' })),
  signup: () => dispatch(openModal({ name: 'signup' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
