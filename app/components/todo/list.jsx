import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from 'components/todo/view';

export default class TodoList extends React.Component {
  renderItems() {
    return this.props.todos.map(todo => <TodoItem key={ todo.id } todo={ todo }/>);
  }

  render() {
    return(
      <ListGroup>
        { ::this.renderItems() }
      </ListGroup>
    );
  }
}
