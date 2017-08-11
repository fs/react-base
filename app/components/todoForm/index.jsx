import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import i18n from 'services/i18n';
import Form from 'components/form';

class TodoForm extends Component {
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
              { i18n.t('todo:taskName') }: { name }
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
            <Button bsStyle="primary" type="submit">
              { i18n.t('todo:save') }
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
};

export default TodoForm;
