import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';
import TodosActions from 'actions/todos';
import styles from './styles';

export default class Todo extends React.Component {
  static propTypes = {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number,
      isComplete: React.PropTypes.bool,
      name: React.PropTypes.string
    })
  }

  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    TodosActions.update(this.props.todo);
  }

  delete(event) {
    TodosActions.delete(this.props.todo);
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
