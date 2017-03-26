import React, { Component, PropTypes } from 'react';
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
  const renderCurrentModal = () => {
    if (!modal) return null;

    const { modalName, ...rest } = modal;

    if (modalName) {
      const params = { ...rest, closeModal };
      const CurrentModal = MODALS[modalName];

      return <CurrentModal { ...params }/>;
    }
  };

  return (
    <div className="modals">
      { renderCurrentModal() }
    </div>
  );
};

ModalContainer.propTypes = {
  modalName: PropTypes.string
};

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(modalActions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
