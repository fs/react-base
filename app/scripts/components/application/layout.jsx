import React from 'react';
import EventEmitter from 'scripts/emitter';
import HeaderLayout from 'scripts/components/header/layout';
import TodoModal from 'scripts/components/todo/modal';

export default class App extends React.Component {
  componentDidMount() {
    EventEmitter.on('modal:show', () => {
      this.refs.modal.show();
    })
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
          <HeaderLayout/>
        </header>
        <div className="container content">
          <div id="app">
            { this.props.children }
          </div>
          <TodoModal ref="modal"/>
        </div>
      </div>
    )
  }
}
