import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
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
      transitionName={{
        appear: styles.appear,
        appearActive: styles.appearActive,
        enter: styles.enter,
        enterActive: styles.enterActive,
        leave: styles.leave,
        leaveActive: styles.leaveActive
      }}
      transitionAppear={ true }
    >
      <ListGroupItem onClick={ toggle }>
        <span>
          { todo.name }
        </span>
        <span
          className={ `glyphicon glyphicon-trash ${styles.iconTrash}` }
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
