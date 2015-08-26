import React from 'react';
import TodoItem from 'scripts/components/todo/item';

export default class TodoList extends React.Component {
  renderItems() {
    return this.props.todos.map((todo) => <TodoItem todo={ todo }/>);
  }

  render() {
    return(
      <div className="list-group">
        { ::this.renderItems() }
      </div>
    );
  }
}
