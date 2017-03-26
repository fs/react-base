import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import sessionActions from 'actions/session'
import SignupForm from 'components/signupForm';

const SignupModalContainer = ({ isOpen, isLoading, signupUser, closeModal }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">Sign Up</h3>
    </Modal.Header>
    <SignupForm
      isLoading={ isLoading }
      signupUser={ signupUser }
      closeModal={ closeModal }
    />
  </Modal>
)

const mapStateToProps = state => ({
  isLoading: state.session.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (user) => dispatch(sessionActions.signupUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupModalContainer);
