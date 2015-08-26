import React from 'react/addons';
import TodoActions from 'scripts/actions/todo';

const { CSSTransitionGroup } = React.addons;

export default class TodoItem extends React.Component {
  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    TodoActions.todoUpdate(this.props.todo);
  }

  render() {
    return (
      <CSSTransitionGroup transitionName="example" transitionAppear={ true }>
        <li className="list-group-item pointer" onClick={ ::this.toggle }>
          { this.props.todo.name }
        </li>
      </CSSTransitionGroup>
    );
  }
}
