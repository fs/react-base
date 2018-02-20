import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import styles from './styles.css';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const toggle = () => {
    updateTodo({
      ...todo,
      isComplete: !todo.isComplete,
    });
  };

  const remove = (event) => {
    deleteTodo(todo);
    event.stopPropagation();
  };

  return (
    <ListGroupItem
      className={styles.todo}
      onClick={toggle}
    >
      <span>
        { todo.name }
      </span>
      <span
        className={`glyphicon glyphicon-trash ${styles.iconTrash}`}
        onClick={remove}
      />
    </ListGroupItem>
  );
};

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    isComplete: PropTypes.bool,
    name: PropTypes.any,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
