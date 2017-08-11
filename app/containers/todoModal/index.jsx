import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import i18n from 'services/i18n';
import todosActions from 'actions/todos';
import TodoForm from 'components/todoForm';

const TodoModalContainer = ({ isOpen, createTodo, closeModal }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">{ i18n.t('modal:newTask') }</h3>
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
