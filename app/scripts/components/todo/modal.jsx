import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import TodoActions from 'scripts/actions/todo';
import TodoStore from 'scripts/stores/todo';

export default class TodoModal extends React.Component {
  state = TodoStore.getState()

  componentDidMount() {
    TodoStore.listen(::this.changeState);
  }

  componentWillUnmount() {
    TodoStore.unlisten(::this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  setName(event) {
    TodoActions.setName(event.target.value);
  }

  saveTodo() {
    TodoActions.create(this.state.todo);
    TodoActions.hide();
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.state.showModal }
        onHide={ TodoActions.hide }
        onExited={ TodoActions.reset }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">New Task</h3>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label>Task name: { this.state.todo.name }</label>
          </div>
          <input
            placeholder="Task name..."
            type="text"
            value={ this.state.todo.name }
            onChange={ ::this.setName }
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="primary"
            onClick={ ::this.saveTodo }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
