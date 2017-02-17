import React, { Component } from 'react';
import TodoContainer from 'containers/todo';
import Home from 'components/home';
import session from 'services/session';

export default class Main extends Component {
  render() {
    return this.props.isAuthenticated ? <TodoContainer/> : <Home/>;
  }
}
