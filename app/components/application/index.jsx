import React from 'react';
import PropTypes from 'prop-types';
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
        { children }
      </main>
      <Footer />
      <Modal />
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

export default Application;
