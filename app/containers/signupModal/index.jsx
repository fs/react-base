import { connect } from 'react-redux';
import sessionActions from 'actions/session';
import signupModal from 'components/signup/modal';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = {
  signupUser: sessionActions.signupUser
};

export default connect(mapStateToProps, mapDispatchToProps)(signupModal);
