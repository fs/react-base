import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import TodoActions from 'actions/todo';
import ApplicationActions from 'actions/application';
import TodoStore from 'stores/todo';
import ApplicationStore from 'stores/application';

@connectToStores
export default class TodoModal extends React.Component {
  static propTypes = {
    isModalOpen: React.PropTypes.bool,
    todo: React.PropTypes.shape({
      name: React.PropTypes.string,
      isComplete: React.PropTypes.bool
    })
  }

  static getStores(props) {
    return [TodoStore, ApplicationStore];
  }

  static getPropsFromStores(props) {
    return {
      ...TodoStore.getState(),
      ...ApplicationStore.getState()
    };
  }

  setName(event) {
    TodoActions.setName(event.target.value);
  }

  saveTodo() {
    if (this.validationState() !== 'error') {
      TodoActions.create(this.props.todo);
      ApplicationActions.closeModal();
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
        show={ this.props.isModalOpen }
        onHide={ ApplicationActions.closeModal }
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
