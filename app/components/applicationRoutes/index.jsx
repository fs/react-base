import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from 'containers/main';
import About from 'components/about';

const ApplicationRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Main }
    />
    <Route path="/about" component={ About } />
    <Redirect to="/" />
  </Switch>
);

export default ApplicationRoutes;
