import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './item';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ListGroup>
    {
      todos.map(todo => (
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
