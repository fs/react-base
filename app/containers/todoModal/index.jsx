import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import todosActions from 'actions/todos';
import modalActions from 'actions/modal';
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
)

const mapDispatchToProps = dispatch => ({
  createTodo: (payload) => dispatch(todosActions.createTodo(payload)),
  closeModal: () => dispatch(modalActions.closeModal())
});

export default connect(null, mapDispatchToProps)(TodoModalContainer);
