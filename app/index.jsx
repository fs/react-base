import 'stylesheets/application.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from 'stores/application';
import appHistory from 'services/history';
import Application from 'components/application';

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={appHistory}>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderComponent(Application);

if (module.hot) {
  module.hot.accept('components/application', () => {
    renderComponent(Application);
  });
}
