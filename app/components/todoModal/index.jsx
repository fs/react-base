import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import todosActions from 'actions/todos';
import modalActions from 'actions/modal';
import Form from 'components/form';

class TodoModal extends Component {
  static propTypes = {
    createTodo: PropTypes.func,
    closeModal: PropTypes.func
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

  createTodo = (event) => {
    event.preventDefault()

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
    console.log(this.props);
    const { name } = this.state;

    return (
      <Modal
        bsSize="small"
        show={ this.props.isOpen }
        onHide={ this.props.closeModal }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">New Task</h3>
        </Modal.Header>
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
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTodo: (payload) => dispatch(todosActions.createTodo(payload)),
  closeModal: () => dispatch(modalActions.closeModal())
});

export default connect(null, mapDispatchToProps)(TodoModal);
