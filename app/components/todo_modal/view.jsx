import React from 'react';
import { Modal, Button, Input } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import TodoActions from 'actions/todo';
import TodoStore from 'stores/todo';

export default class TodoModal extends React.Component {
  state = TodoStore.getState()

  constructor() {
    super();

    this.changeState = ::this.changeState;
  }

  componentDidMount() {
    TodoStore.listen(this.changeState);
  }

  componentWillUnmount() {
    TodoStore.unlisten(this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  setName(event) {
    TodoActions.setName(event.target.value);
  }

  saveTodo() {
    if (this.validationState() !== 'error') {
      TodoActions.createTodo(this.state.todo);
      TodoActions.hide();
    }
  }

  validationState() {
    const length = this.state.todo.name.length;

    if (length > 6) return 'success';
    if (length > 3) return 'warning';
    return 'error';
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
          <Input
            type="text"
            value={ this.state.todo.name }
            placeholder="Task name..."
            bsStyle={ ::this.validationState() }
            label={ `Task name: ${this.state.todo.name}` }
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
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
