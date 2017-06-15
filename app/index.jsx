import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import appHistory from 'services/history';
import i18n from 'services/i18n';
import store from 'stores/application';
import Root from 'containers/root';

const mountNode = document.getElementById('app');

// Define your own response handler if it's necessary
// import http from 'lib/http';
//
// http.handleResponse = response => {
//   const { status } = response;
//
//   return (status >= 200 && status < 300) ?
//     Promise.resolve(response) :
//     Promise.reject(response);
// };

render(
  <AppContainer>
    <I18nextProvider i18n={ i18n }>
      <Root store={ store } history={ appHistory } />
    </I18nextProvider>
  </AppContainer>,
  mountNode
);

if (module.hot) {
  module.hot.accept('containers/root', () => {
    const HotRoot = require('containers/root').default;

    render(
      <AppContainer>
        <I18nextProvider i18n={ i18n }>
          <HotRoot store={ store } history={ appHistory } />
        </I18nextProvider>
      </AppContainer>,
      mountNode
    );
  });
}
