import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import styles from './styles';

const Footer = ({ t }) => (
  <footer className={ styles.footer }>
    <p className="footer-text">{ t('common:projectName') }</p>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(Footer);
