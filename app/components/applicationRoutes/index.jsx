import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from 'containers/main';
import About from 'components/about';
import Profile from 'containers/profile';

const ApplicationRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Main }
    />
    <Route path="/about" component={ About } />
    <Route path="/profile" component={ Profile } />
    <Redirect to="/" />
  </Switch>
);

export default ApplicationRoutes;
