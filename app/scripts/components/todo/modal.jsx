import 'bootstrap';
import $ from 'jquery';
import React from 'react';
import { findDOMNode } from 'react-dom';
import TodoActions from 'scripts/actions/todo';
import TodoStore from 'scripts/stores/todo';

export default class TodoModal extends React.Component {
  state = {
    visible: false,
    value: ''
  }

  componentDidMount() {
    this.$el = $(findDOMNode(this));
    this.$el.on('hidden.bs.modal', ::this.reset);

    this.unsubscribe = TodoStore.listen(() => {
      this.$el.modal('hide');
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  show() {
    this.$el.modal('show');
  }

  reset() {
    this.setState({ value: '' });
  }

  save() {
    TodoActions.todoCreate({
      name: this.state.value,
      isComplete: false
    });
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h3 className="modal-title">New Task</h3>
            </div>
            <div className="modal-body">
              <div>
                <label>Task name: { this.state.value }</label>
              </div>
              <input placeholder="Task name..." type="text" value={ this.state.value } onChange={ ::this.onChange } />
            </div>
            <div className="modal-footer">
              <div className="row">
                <div className="col col-md-12">
                  <button type="button" className="btn btn-primary pull-right" onClick={ ::this.save }>Save</button>
                  <button type="button" className="btn btn-default pull-right spacing-right" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
