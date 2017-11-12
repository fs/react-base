import { connect } from 'react-redux';
import { signinUser } from 'actions/session';
import SigninModal from 'components/signin/modal';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = {
  signinUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninModal);
