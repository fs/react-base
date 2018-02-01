import React from 'react';
import ApplicationRoutes from 'components/applicationRoutes';
import Modal from 'containers/modal';
import Navigation from 'containers/navigation';
import Footer from 'components/footer';
import styles from './styles';

const MainLayout = () => (
  <div className={ styles.layout }>
    <main className={ styles.wrapper }>
      <Navigation />
      <ApplicationRoutes />
    </main>
    <Footer/>
    <Modal/>
  </div>
);

export default MainLayout;
