import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import TodoActions from 'actions/todo';
import TodoStore from 'stores/todo';

@connectToStores
export default class TodoModal extends React.Component {
  static getStores(props) {
    return [TodoStore];
  }

  static getPropsFromStores(props) {
    return TodoStore.getState();
  }

  setName(event) {
    TodoActions.setName(event.target.value);
  }

  saveTodo() {
    if (this.validationState() !== 'error') {
      TodoActions.create(this.props.todo);
      TodoActions.hide();
    }
  }

  validationState() {
    const length = this.props.todo.name.length;

    if (length > 6) return 'success';
    if (length > 3) return 'warning';
    return 'error';
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.props.showModal }
        onHide={ TodoActions.hide }
        onExited={ TodoActions.reset }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">New Task</h3>
        </Modal.Header>

        <form>
          <Modal.Body>
            <FormGroup
              controlId="taskName"
              validationState={ ::this.validationState() }
            >
              <ControlLabel>Task name: { this.props.todo.name }</ControlLabel>
              <FormControl
                type="text"
                placeholder="Task name..."
                onChange={ ::this.setName }
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button
              bsStyle="primary"
              onClick={ ::this.saveTodo }
            >
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
