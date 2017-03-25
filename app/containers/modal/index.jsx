import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import modalActions from 'actions/modal';
import TodoModal from 'containers/todoModal';
// import SigninModal from 'components/signinModal';
// import SignupModal from 'components/signupModal';

const MODALS = {
  todo: TodoModal
  // signIn: SigninModal,
  // signUp: SignupModal
};

const ModalContainer = ({ modal }) => {
  const renderCurrentModal = () => {
    if (!modal) return null;

    const { modalName, ...rest } = modal;

    if (modalName) {
      const CurrentModal = MODALS[modalName];

      return <CurrentModal { ...rest }/>;
    }
  }

  return (
    <div className="modals">
      { renderCurrentModal() }
    </div>
  )
}

ModalContainer.propTypes = {
  modalName: PropTypes.string
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(ModalContainer);
