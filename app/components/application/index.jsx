import React, { Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import styles from './styles';

export default class Application extends Component {
  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          <Header/>
          { this.props.children }
        </main>
        <Footer/>
      </div>
    );
  }
}
