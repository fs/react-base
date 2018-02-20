import 'stylesheets/application.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from 'stores/application';
import ApplicationRouter from 'components/applicationRouter';

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
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
