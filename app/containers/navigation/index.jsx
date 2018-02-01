import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/session';
import { openModal } from 'actions/modal';
import Navigation from 'components/navigation';

const mapStateToProps = state => state.session;

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logoutUser(user)),
  signin: () => dispatch(openModal({ name: 'signin' })),
  signup: () => dispatch(openModal({ name: 'signup' }))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
