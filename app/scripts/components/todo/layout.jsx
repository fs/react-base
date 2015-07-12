import _ from 'underscore';
import React from 'react';
import Base from 'scripts/components/base/base';
import TodoList from 'scripts/components/todo/list';
import dispatcher from 'scripts/dispatchers/dispatcher';
import emitter from 'scripts/emitters/emitter';

export default class TodoLayout extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      todos: []
    };

    this.bindMethods('renderList', 'create');
  }

  componentDidMount() {
    dispatcher.dispatch({
      type: 'all-todos'
    });
  }

  componentWillMount() {
    emitter.on('todos-changed', (todos) => {
      this.setState({ todos });
    });
  }

  componentWillUnmount() {
    emitter.off('todos-changed');
  }

  create() {
    emitter.emit('modal-show');
  }

  renderList(complete) {
    return(
      <TodoList todos={
        _.filter(this.state.todos, function(todo) {
          return todo.isComplete === complete;
        })
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
