import { connect } from 'react-redux';
import Main from 'components/main';

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
});

export default connect(mapStateToProps)(Main);
