import React from 'react';
import Base from 'scripts/components/base/base';
import TodoItem from 'scripts/components/todo/item';

export default class TodoList extends Base {
  constructor(...props) {
    super(...props);

    this.bindMethods('renderItems');
  }

  renderItems() {
    return this.props.todos.map((todo) => <TodoItem todo={ todo }/>);
  }

  render() {
    return(
      <div className="list-group">
        { this.renderItems() }
      </div>
    );
  }
}
