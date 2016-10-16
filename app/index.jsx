import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import appHistory from 'services/history';
import configureStore from 'store/configureStore';
import Root from 'containers/root';

const store = configureStore();
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
