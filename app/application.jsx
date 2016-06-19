import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import Application from 'components/application';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';
import { requireAuth } from 'helpers/routes';

render((
  <Router history={ browserHistory }>
    <Route component={ Application }>
      <Route path="/" component={ Main }/>
      <Route
        path="about"
        component={ About }
        onEnter={ requireAuth }
      >
        <Route path="extended/:id" component={ Article }/>
      </Route>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
