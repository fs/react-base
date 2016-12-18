import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import TodoActions from 'actions/todo';
import ApplicationActions from 'actions/application';
import TodoStore from 'stores/todo';
import ApplicationStore from 'stores/application';

export default class TodoModal extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      name: PropTypes.string,
      isComplete: PropTypes.bool
    })
  }

  setName(event) {
    TodoActions.setName(event.target.value);
  }

  saveTodo = () => {
    if (this.validationState() !== 'error') {
      TodoActions.create(this.props.todo);
      ApplicationActions.closeModal();
    }
  }

  validationState = () => {
    const length = this.props.todo.name.length;

    if (length > 6) return 'success';
    if (length > 3) return 'warning';
    return 'error';
  }

  render() {
    return (
      <div>
        <h3>New Task</h3>
        <form>
            <FormGroup
              controlId="taskName"
              validationState={ this.validationState() }
            >
              <ControlLabel>Task name: { this.props.todo.name }</ControlLabel>
              <FormControl
                type="text"
                placeholder="Task name..."
                onChange={ this.setName }
              />
            </FormGroup>

            <Button
              bsStyle="primary"
              onClick={ this.saveTodo }
            >
              Save
            </Button>
        </form>
      </div>
    );
  }
}
