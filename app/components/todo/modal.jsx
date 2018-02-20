import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import i18n from 'services/i18n';
import Modal from 'components/modal';
import Form from 'components/form';

class TodoModal extends Component {
  state = {
    name: '',
    errors: {},
  }

  changeName = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  validationState = () => {
    const { length } = this.state.name;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  createTodo = async (event) => {
    event.preventDefault();

    const { name } = this.state;
    const { createTodo, closeModal } = this.props;

    if (this.validationState() === 'success') {
      try {
        await createTodo({ name });
        this.setState({ name: '' });
        closeModal();
      } catch ({ errors }) {
        this.setState({ errors });
      }
    }
  }

  render() {
    const { name } = this.state;
    const { isOpen, closeModal } = this.props;

    return (
      <Modal
        title={i18n.t('modal:newTask')}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Form onSubmit={this.createTodo}>
          <FormGroup
            controlId="taskName"
            validationState={this.validationState()}
          >
            <ControlLabel>
              { i18n.t('todo:taskName') }: { name }
            </ControlLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Task name..."
              onChange={this.changeName}
              value={name}
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">
            { i18n.t('todo:save') }
          </Button>
        </Form>
      </Modal>
    );
  }
}

TodoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default TodoModal;
