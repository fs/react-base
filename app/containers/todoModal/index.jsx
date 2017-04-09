import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import todosActions from 'actions/todos';
import TodoForm from 'components/todoForm';

const TodoModalContainer = ({ isOpen, createTodo, closeModal }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">New Task</h3>
    </Modal.Header>
    <TodoForm
      createTodo={ createTodo }
      closeModal={ closeModal }
    />
  </Modal>
);

TodoModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  createTodo: payload => dispatch(todosActions.createTodo(payload))
});

export default connect(null, mapDispatchToProps)(TodoModalContainer);
