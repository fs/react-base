import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

const LOCALE_FOLDER = 'app/locales/en/';

const getResources = () => {
  const fs = require('fs');

  return fs.readdirSync(LOCALE_FOLDER).reduce((acc, value, key) => {
    const fileName = value.match(/(.+).json$/)[1];

    return {
      'en': {
        ...acc['en'],
        [fileName]: require(`../${LOCALE_FOLDER}/${value}`)
      }
    };
  }, {});
};

i18n.init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: getResources()
});

const i18nContext = {
  i18n,
  t: i18n.getFixedT(null, 'translation')
};

class I18nContextProvider extends Component {
  static childContextTypes = {
    i18n: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  };

  getChildContext() {
    return i18nContext;
  }

  render() {
    return this.props.children;
  }
}

const withI18n = component => {
  console.log(component);

  return (
    <I18nContextProvider i18n={ i18n }>
      { React.cloneElement(component, Object.assign({}, i18nContext, component.props)) }
    </I18nContextProvider>
  );
}

export default withI18n;
