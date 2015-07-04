import React from 'react';
import Router from 'react-router';
import TodoStore from 'scripts/stores/todo';
import AppLayout from 'scripts/components/application/layout';
import TodoLayout from 'scripts/components/todo/layout';
import AboutLayout from 'scripts/components/about/layout';
import AboutText from 'scripts/components/about/text';

var { Route, Redirect } = Router;

export default (
  <Route handler = { AppLayout }>
    <Route path="/" handler={ TodoLayout }/>
    <Route path="about" handler={ AboutLayout }>
      <Route path="extended" handler={ AboutText }/>
      <Route path="extended/:id" handler={ AboutText }/>
    </Route>
    <Redirect from="*" to="/"/>
  </Route>
)
