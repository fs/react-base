import React from 'react';
import ApplicationRoutes from 'components/applicationRoutes';
import Alert from 'react-s-alert';
import Modal from 'containers/modal';
import Navigation from 'containers/navigation';
import Footer from 'components/footer';
import styles from './styles.css';

const Application = () => (
  <div className={styles.layout}>
    <main className={styles.wrapper}>
      <Navigation />
      <ApplicationRoutes />
    </main>
    <Footer />
    <Modal />
    <Alert stack={{ limit: 3 }} html />
  </div>
);

export default Application;
