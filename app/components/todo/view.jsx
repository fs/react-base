import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap';
import TodosActions from 'actions/todos';
import styles from './styles';

export default class TodoView extends React.Component {
  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    TodosActions.updateTodo(this.props.todo);
  }

  delete(event) {
    TodosActions.deleteTodo(this.props.todo);
    event.stopPropagation();
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="todo"
        transitionAppear={ true }
        transitionEnterTimeout={ 0 }
        transitionLeaveTimeout={ 0 }
        transitionAppearTimeout={ 0 }
      >
        <ListGroupItem onClick={ ::this.toggle }>
          <span>
            { this.props.todo.name }
          </span>
          <span
            className={ `glyphicon glyphicon-trash ${styles.trashIcon}` }
            onClick={ ::this.delete }
          >
          </span>
        </ListGroupItem>
      </CSSTransitionGroup>
    );
  }
}
