import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/todo';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.id,
        isComplete: React.PropTypes.bool,
        name: React.PropTypes.string
      })
    )
  }

  renderItems() {
    return this.props.todos.map(todo => <Todo key={ todo.id } todo={ todo }/>);
  }

  render() {
    return(
      <ListGroup>
        { ::this.renderItems() }
      </ListGroup>
    );
  }
}
