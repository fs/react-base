import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import jFetch from 'j-fetch';
import currentUser from 'services/currentUser';
import appHistory from 'services/history';
import store from 'stores/application';
import Root from 'containers/root';

jFetch.init({
  authHeaders: {
    'X-User-Email': currentUser.email,
    'X-User-Token': currentUser.token
  }
});

const mountNode = document.getElementById('app');

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
