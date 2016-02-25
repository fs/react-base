import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import TodosActions from 'scripts/actions/todos';

export default class TodoItem extends React.Component {
  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    TodosActions.update(this.props.todo);
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={ true }
        transitionEnterTimeout={ 0 }
        transitionLeaveTimeout={ 0 }
        transitionAppearTimeout={ 0 }
      >
        <li
          className="list-group-item pointer"
          onClick={ ::this.toggle }
        >
          { this.props.todo.name }
        </li>
      </CSSTransitionGroup>
    );
  }
}
