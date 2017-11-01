import { connect } from 'react-redux';
import sessionActions from 'actions/session';
import SigninModal from 'components/signin/modal';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = {
  signinUser: sessionActions.signinUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninModal);
