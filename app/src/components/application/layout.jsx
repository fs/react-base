import React from 'react';
import HeaderLayout from 'components/header/layout';
import TodoModal from 'components/todo/modal';

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
