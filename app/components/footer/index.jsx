import React from 'react';
import i18n from 'services/i18n';
import styles from './styles.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className="footer-text">{ i18n.t('common:projectName') }</p>
  </footer>
);

export default Footer;
