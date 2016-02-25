import React from 'react';
import HeaderLayout from 'scripts/components/header/layout';
import TodoModal from 'scripts/components/todo/modal';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderLayout/>
        { this.props.children }
        <TodoModal/>
      </div>
    )
  }
}
