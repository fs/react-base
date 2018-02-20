import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import Modal from 'containers/modal';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import styles from './styles.css';

const Application = ({
  children, session, logout, signin, signup,
}) => {
  const { loggedIn, currentUser } = session;

  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        <Navigation
          currentUser={currentUser}
          loggedIn={loggedIn}
          logout={logout}
          signin={signin}
          signup={signup}
        />
        { cloneElement(children, { loggedIn }) }
      </main>
      <Footer />
      <Modal />
      <Alert stack={{ limit: 3 }} html />
    </div>
  );
};

Application.propTypes = {
  logout: PropTypes.func.isRequired,
  session: PropTypes.shape({
    loggedIn: PropTypes.bool,
    currentUser: PropTypes.object,
  }).isRequired,
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default Application;
