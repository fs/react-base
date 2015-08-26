import _ from 'underscore';
import React from 'react';
import ModalActions from 'scripts/actions/modal';
import TodoActions from 'scripts/actions/todo';
import TodoStore from 'scripts/stores/todo';
import Base from 'scripts/components/base/base';
import TodoList from 'scripts/components/todo/list';

export default class TodoLayout extends Base {
  state = {
    todos: []
  }

  constructor(...props) {
    super(...props);

    this.bindMethods('renderList', 'create');
  }

  componentDidMount() {
    TodoActions.todosGet();
  }

  componentWillMount() {
    this.unsubscribe = TodoStore.listen((todos) => {
      this.setState({ todos });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  create() {
    ModalActions.show();
  }

  renderList(complete) {
    return (
      <TodoList todos={
        _.filter(this.state.todos, (todo) => todo.isComplete === complete)
      } />
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Todo List</h2>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary pull-right spacing-top"
              onClick={ this.create }
            >
              New Task
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3 className="spacing-bottom">Incomplete</h3>
            { this.renderList(false) }
          </div>
          <div className="col-md-6">
            <h3 className="spacing-bottom">Complete</h3>
            { this.renderList(true) }
          </div>
        </div>
      </div>
    )
  }
}
