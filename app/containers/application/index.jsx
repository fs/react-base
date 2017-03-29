import React, { PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import sessionActions from 'actions/session';
import modalActions from 'actions/modal';
import Modal from 'containers/modal';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import styles from './styles';

const Application = ({ children, session, logout, signin, signup }) => {
  const { loggedIn, currentUser } = session;

  return (
    <div className={ styles.layout }>
      <main className={ styles.wrapper }>
        <Navigation
          currentUser={ currentUser }
          loggedIn={ loggedIn }
          logout={ logout }
          signin={ signin }
          signup={ signup }
        />
        { cloneElement(children, { loggedIn }) }
      </main>
      <Footer/>
      <Modal/>
    </div>
  );
};

Application.propTypes = {
  logout: PropTypes.func.isRequired,
  session: PropTypes.shape({
    loggedIn: PropTypes.bool,
    currentUser: PropTypes.object
  }).isRequired,
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(sessionActions.logoutUser(user)),
  signin: () => dispatch(modalActions.openModal({ name: 'signin' })),
  signup: () => dispatch(modalActions.openModal({ name: 'signup' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
