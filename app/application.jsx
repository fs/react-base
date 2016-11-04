import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import appHistory from 'services/history';
import { requireAuth } from 'helpers/routes';
import Application from 'components/application';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';

render((
  <Router history={appHistory}>
    <Route component={Application}>
      <Route path="/" component={Main} />
      <Route
        path="about"
        component={About}
        onEnter={requireAuth}
      >
        <Route path="extended/:id" component={Article} />
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('app'));
