import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import { translate } from 'react-i18next';
import Form from 'components/form';

class TodoForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
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
    const { t } = this.props;

    return (
      <Form onSubmit={ this.createTodo }>
        <Modal.Body>
          <FormGroup
            controlId="taskName"
            validationState={ this.validationState() }
          >
            <ControlLabel>
              { t('todo:taskName') }: { name }
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
              { t('todo:save') }
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    );
  }
}

export default translate()(TodoForm);
