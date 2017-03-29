import React, { Component, PropTypes } from 'react';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import Form from 'components/form';

export default class TodoForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
    createTodo: PropTypes.func
  }

  state = {
    name: '',
    errors: {}
  }

  changeName = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  validationState = () => {
    const length = this.state.name.length;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  createTodo = event => {
    event.preventDefault();

    const { name } = this.state;
    const { createTodo, closeModal } = this.props;

    if (this.validationState() === 'success') {
      createTodo({ name })
        .then(() => {
          this.setState({ name: '' });
          closeModal();
        })
        .catch(({ errors }) => this.setState({ errors }));
    }
  }

  render() {
    const { name } = this.state;

    return (
      <Form onSubmit={ this.createTodo }>
        <Modal.Body>
          <FormGroup
            controlId="taskName"
            validationState={ this.validationState() }
          >
            <ControlLabel>
              Task name: { name }
            </ControlLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Task name..."
              onChange={ this.changeName }
              value={ name }
            />
          </FormGroup>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    );
  }
}
