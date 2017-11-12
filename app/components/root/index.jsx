import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import appHistory from 'services/history';
import store from 'stores/application';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';
import Application from 'containers/application';

const Root = () => (
  <Provider store={ store }>
    <Router history={ appHistory }>
      <Route component={ Application }>
        <Route path="/" component={ Main } />
        <Route path="about" component={ About }>
          <Route path="extended/:id" component={ Article } />
        </Route>
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
);

export default Root;
