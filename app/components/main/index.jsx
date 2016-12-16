import React, { Component } from 'react';
import TodoLayout from 'components/todo/layout';
import Home from 'components/home';
import session from 'services/session';

export default class Main extends Component {
  render() {
    return session.loggedIn() ? <TodoLayout/> : <Home/>;
  }
}
