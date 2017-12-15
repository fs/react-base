import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import jFetch from 'j-fetch';
import store from 'stores/application';
import currentUser from 'services/currentUser';
import ApplicationRouter from 'components/applicationRouter';

jFetch.init({
  authHeaders: {
    'X-User-Email': currentUser.email,
    'X-User-Token': currentUser.token
  }
});

const renderComponent = Component => {
  render(
    <AppContainer>
      <Provider store={ store }>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderComponent(ApplicationRouter);

if (module.hot) {
  module.hot.accept('components/applicationRouter', () => {
    renderComponent(ApplicationRouter);
  });
}
