import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import appHistory from 'services/history';
import Main from 'components/main';
import About from 'components/about';
import Application from 'containers/application';

const ApplicationRouter = () => (
  <Router history={ appHistory }>
    <Route>
      {props => (
        <Application { ...props }>
          <Switch>
            <Route
              exact
              path="/"
              component={ Main }
            />
            <Route path="/about" component={ About } />
            <Redirect to="/" />
          </Switch>
        </Application>
      )}
    </Route>
  </Router>
);

export default ApplicationRouter;
