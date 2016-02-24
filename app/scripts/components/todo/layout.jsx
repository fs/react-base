import _ from 'underscore';
import React from 'react';
import EventEmitter from 'scripts/emitter';
import TodosActions from 'scripts/actions/todos';
import TodosStore from 'scripts/stores/todos';
import TodoList from 'scripts/components/todo/list';

export default class TodoLayout extends React.Component {
  state = TodosStore.getState()

  componentDidMount() {
    TodosStore.listen(::this.changeState);
    TodosActions.get(this.state.todos);
  }

  componentWillUnmount() {
    TodosStore.unlisten(::this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  create() {
    EventEmitter.emit('modal:show');
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
              onClick={ ::this.create }
            >
              New Task
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3 className="spacing-bottom">Incomplete</h3>
            { ::this.renderList(false) }
          </div>
          <div className="col-md-6">
            <h3 className="spacing-bottom">Complete</h3>
            { ::this.renderList(true) }
          </div>
        </div>
      </div>
    )
  }
}
