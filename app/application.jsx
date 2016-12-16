import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import appHistory from 'services/history';
import store from 'store/configureStore';
import Root from 'containers/root';

render(
  <Root store={ store } history={ appHistory } />,
  document.getElementById('app')
);
