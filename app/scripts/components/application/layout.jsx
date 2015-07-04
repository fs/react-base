import React from 'react';
import Router from 'react-router';
import Base from 'scripts/components/base/base';
import HeaderLayout from 'scripts/components/header/layout';
import TodoModal from 'scripts/components/todo/modal';
import emitter from 'scripts/emitters/emitter';

var { RouteHandler } = Router;

export default class App extends Base {
  componentDidMount() {
    emitter.on('modal-show', () => {
      this.refs.create.show();
    });
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
          <HeaderLayout/>
        </header>
        <div className="container content">
          <div id="app">
            <RouteHandler/>
          </div>
          <TodoModal ref="create"/>
        </div>
      </div>
    )
  }

  static willTransitionTo(transition, params, query, callback) {
    console.log('App on Root route');
    callback();
  }
}
