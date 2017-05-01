import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import appHistory from 'services/history';
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
    <Root store={ store } history={ appHistory } />
  </AppContainer>,
  mountNode
);

if (module.hot) {
  module.hot.accept('containers/root', () => {
    const HotRoot = require('containers/root').default;

    render(
      <AppContainer>
        <HotRoot store={ store } history={ appHistory } />
      </AppContainer>,
      mountNode
    );
  });
}
