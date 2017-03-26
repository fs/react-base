import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import sessionActions from 'actions/session';
import SigninForm from 'components/signinForm';

const SigninModalContainer = ({ isOpen, isLoading, signinUser, closeModal }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">Sign In</h3>
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
  signinUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.session.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  signinUser: (user) => dispatch(sessionActions.signinUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninModalContainer);
