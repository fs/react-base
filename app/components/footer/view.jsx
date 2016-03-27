import React from 'react';
import Footer from 'components/footer/view';
import styles from './styles';

export default class FooterView extends React.Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <p className="footer-text">React base</p>
      </footer>
    );
  }
}
