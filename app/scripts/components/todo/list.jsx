import _ from 'underscore';
import React from 'react';
import Base from 'scripts/components/base/base';
import TodoItem from 'scripts/components/todo/item';
import dispatcher from 'scripts/dispatchers/dispatcher';

export default class TodoList extends Base {
  constructor(props) {
    super(props);

    this.bindMethods('renderItems');
  }

  renderItems() {
    return _.map(this.props.todos, function(todo) {
      return <TodoItem todo={ todo } />;
    });
  }

  render() {
    return(
      <ul className="list-group">
        { this.renderItems() }
      </ul>
    );
  }
}
