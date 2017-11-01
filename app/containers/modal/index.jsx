import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import modalActions from 'actions/modal';
import TodoModal from 'containers/todoModal';
import SigninModal from 'containers/signinModal';
import SignupModal from 'containers/signupModal';

const MODALS = {
  todo: TodoModal,
  signin: SigninModal,
  signup: SignupModal
};

const ModalContainer = ({ modal, closeModal }) => {
  const { modalName, ...rest } = modal;

  if (modalName) {
    const params = { ...rest, closeModal };
    const CurrentModal = MODALS[modalName];

    return <CurrentModal { ...params }/>;
  }

  return null;
};

ModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = {
  closeModal: modalActions.closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
