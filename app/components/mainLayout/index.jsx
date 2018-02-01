import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from 'containers/modal';
import Navigation from 'containers/navigation';
import Main from 'containers/main';
import About from 'components/about';
import Footer from 'components/footer';
import styles from './styles';

const MainLayout = () => (
  <div className={ styles.layout }>
    <main className={ styles.wrapper }>
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          component={ Main }
        />
        <Route path="/about" component={ About } />
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
    <Modal/>
  </div>
);

export default MainLayout;
