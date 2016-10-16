import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import appHistory from 'services/history';
import configureStore from 'store/configureStore';
import Root from 'containers/root';

const store = configureStore();

render(
  <Root store={ store } history={ appHistory } />,
  document.getElementById('app')
);
