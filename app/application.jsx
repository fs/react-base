import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import AppLayout from 'components/application/layout';
import Main from 'components/main/view';
import AboutLayout from 'components/about/layout';
import About from 'components/about/view';
import Detailed from 'components/about/detailed';
import { requireAuth } from 'helpers/routes';

render((
  <Router history={ browserHistory }>
    <Route component={ AppLayout }>
      <Route path="/" component={ Main }/>
      <Route
        path="about"
        component={ AboutLayout }
        onEnter={ requireAuth }
      >
        <Route path="extended" component={ About }/>
        <Route path="extended/:id" component={ Detailed }/>
      </Route>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
