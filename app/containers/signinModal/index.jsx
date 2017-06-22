import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import sessionActions from 'actions/session';
import SigninForm from 'components/signinForm';

const SigninModalContainer = ({ isOpen, isLoading, signinUser, closeModal, t }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">{ t('modal:signin') }</h3>
    </Modal.Header>
    <SigninForm
      isLoading={ isLoading }
      signinUser={ signinUser }
      closeModal={ closeModal }
    />
  </Modal>
);

SigninModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  signinUser: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.session.isLoading
});

const mapDispatchToProps = dispatch => ({
  signinUser: user => dispatch(sessionActions.signinUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(translate()(SigninModalContainer));
