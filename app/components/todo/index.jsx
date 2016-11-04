import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { ListGroupItem } from 'react-bootstrap';
import TodosActions from 'actions/todos';
import styles from './styles';

export default class Todo extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      isComplete: PropTypes.bool,
      name: PropTypes.string,
    }),
  }

  toggle = () => {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    TodosActions.update(this.props.todo);
  }

  delete = (event) => {
    TodosActions.delete(this.props.todo);
    event.stopPropagation();
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="todo"
        transitionAppear
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
        transitionAppearTimeout={0}
      >
        <ListGroupItem onClick={this.toggle}>
          <span>
            { this.props.todo.name }
          </span>
          <span
            className={`glyphicon glyphicon-trash ${styles.trashIcon}`}
            onClick={this.delete}
          />
        </ListGroupItem>
      </CSSTransitionGroup>
    );
  }
}
