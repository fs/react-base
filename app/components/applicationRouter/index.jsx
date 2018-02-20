import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import appHistory from 'services/history';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';
import Application from 'containers/application';

const ApplicationRouter = () => (
  <Router history={appHistory}>
    <Route component={Application}>
      <Route path="/" component={Main} />
      <Route path="about" component={About}>
        <Route path="extended/:id" component={Article} />
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

export default ApplicationRouter;
