import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import AppLayout from 'components/application/layout';
import TodoLayout from 'components/todo/layout';
import AboutLayout from 'components/about/layout';
import AboutText from 'components/about/text';
import globalStyles from 'stylesheets/main';

render((
  <Router history={ browserHistory }>
    <Route component={ AppLayout }>
      <Route path="/" component={ TodoLayout }/>
      <Route path="about" component={ AboutLayout }>
        <Route path="extended" component={ AboutText }/>
        <Route path="extended/:id" component={ AboutText }/>
      </Route>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
