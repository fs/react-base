import React from 'react';
import styles from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <p className="footer-text">React-base</p>
      </footer>
    );
  }
}
