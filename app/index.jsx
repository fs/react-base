import 'stylesheets/application';
import 'es6-promise/auto';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import jFetch from 'j-fetch';
import currentUser from 'services/currentUser';
import Root from 'components/root';

jFetch.init({
  authHeaders: {
    'X-User-Email': currentUser.email,
    'X-User-Token': currentUser.token
  }
});

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderComponent(Root);

if (module.hot) {
  module.hot.accept('components/root', () => {
    renderComponent(Root);
  });
}
