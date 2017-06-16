import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import todosActions from 'actions/todos';
import TodoForm from 'components/todoForm';

const TodoModalContainer = ({ isOpen, createTodo, closeModal, t }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">{ t('modal:newTask') }</h3>
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
  isOpen: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  createTodo: payload => dispatch(todosActions.createTodo(payload))
});

export default connect(null, mapDispatchToProps)(translate()(TodoModalContainer));
