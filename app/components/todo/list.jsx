import React, { Component, PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.id,
        isComplete: PropTypes.bool,
        name: PropTypes.string,
      })
    ),
  }

  renderItems = () =>
     this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)


  render() {
    return (
      <ListGroup>
        { this.renderItems() }
      </ListGroup>
    );
  }
}
