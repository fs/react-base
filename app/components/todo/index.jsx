import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { ListGroupItem } from 'react-bootstrap';
import styles from './styles';

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const toggle = () => {
    updateTodo({
      ...todo,
      isComplete: !todo.isComplete
    });
  };

  const remove = event => {
    deleteTodo(todo);
    event.stopPropagation();
  };

  return (
    <CSSTransitionGroup
      transitionName="todo"
      transitionAppear={ true }
      transitionEnterTimeout={ 0 }
      transitionLeaveTimeout={ 0 }
      transitionAppearTimeout={ 0 }
    >
      <ListGroupItem onClick={ toggle }>
        <span>
          { todo.name }
        </span>
        <span
          className={ `glyphicon glyphicon-trash ${styles.trashIcon}` }
          onClick={ remove }
        />
      </ListGroupItem>
    </CSSTransitionGroup>
  );
};

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    isComplete: PropTypes.bool,
    name: PropTypes.any
  }).isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default Todo;
