import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import jFetch from 'j-fetch';
import store from 'stores/application';
import currentUser from 'services/currentUser';
import appHistory from 'services/history';
import MainLayout from 'components/mainLayout';

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
        <Router history={ appHistory }>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderComponent(MainLayout);

if (module.hot) {
  module.hot.accept('components/mainLayout', () => {
    renderComponent(MainLayout);
  });
}
