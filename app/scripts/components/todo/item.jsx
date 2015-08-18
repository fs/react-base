import React from 'react/addons';
import Base from 'scripts/components/base/base';
import dispatcher from 'scripts/dispatchers/dispatcher';

let { CSSTransitionGroup } = React.addons;

export default class TodoItem extends Base {
  constructor(...props) {
    super(...props);

    this.bindMethods('toggle');
  }

  toggle() {
    this.props.todo.isComplete = !this.props.todo.isComplete;
    dispatcher.dispatch({
      type: 'update-todo',
      content: this.props.todo
    });
  }

  render() {
    return (
      <CSSTransitionGroup transitionName="example" transitionAppear={ true }>
        <li className="list-group-item pointer" onClick={ this.toggle }>
          { this.props.todo.name }
        </li>
      </CSSTransitionGroup>
    );
  }
}
