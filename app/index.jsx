import 'stylesheets/application';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from 'routes';

const mountNode = document.getElementById('app');

render(<AppContainer component={ Routes } />, mountNode);

if (module.hot) {
  module.hot.accept('./routes', () => {
    unmountComponentAtNode(mountNode);
    render(<AppContainer component={ require('./routes').default } />, mountNode);
  });
}
