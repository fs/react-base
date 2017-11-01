import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './item';

const TodoList = ({ isComplete, todos, updateTodo, deleteTodo }) => (
  <ListGroup>
    {
      todos
        .filter(todo => todo.isComplete === isComplete)
        .map(todo => (
          <TodoItem
            key={ todo.id }
            todo={ todo }
            updateTodo={ updateTodo }
            deleteTodo={ deleteTodo }
          />
        ))
    }
  </ListGroup>
);

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      isComplete: PropTypes.bool,
      name: PropTypes.any
    })
  ).isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default TodoList;
