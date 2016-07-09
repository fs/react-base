import React from 'react';
import Header from 'components/header';
import Modals from 'components/modals';
import Footer from 'components/footer';
import styles from './styles';

export default class Application extends React.Component {
  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          <Header/>
          { this.props.children }
        </main>
        <Footer/>
        <Modals/>
      </div>
    );
  }
}
