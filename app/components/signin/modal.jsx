import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import i18n from 'services/i18n';
import Modal from 'components/modal';
import Form from 'components/form';

class SigninModal extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  setValue = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  isFormValid = () => {
    const { email, password } = this.state;

    return email.length > 5 && password.length > 5;
  }

  signIn = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { signinUser, closeModal } = this.props;

    if (this.isFormValid()) {
      try {
        await signinUser({ email, password });
        this.setState({ email: '', password: '' });
        closeModal();
      } catch ({ errors }) {
        this.setState({ errors });
      }
    }
  }

  validationState = value => {
    const length = value.length;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  render() {
    const { email, password } = this.state;
    const {
      isOpen,
      closeModal,
      session
    } = this.props;
    const { isLoading } = session;

    return (
      <Modal
        title={ i18n.t('modal:signin') }
        isOpen={ isOpen }
        closeModal={ closeModal }
      >
        <Form onSubmit={ this.signIn }>
          <FormGroup
            controlId="email"
            validationState={ this.validationState(email) }
          >
            <ControlLabel>
              { i18n.t('session:email') }
            </ControlLabel>
            <FormControl
              type="text"
              name="email"
              onChange={ this.setValue }
            />
          </FormGroup>
          <FormGroup
            controlId="password"
            validationState={ this.validationState(password) }
          >
            <ControlLabel>
              { i18n.t('session:password') }
            </ControlLabel>
            <FormControl
              autoComplete="off"
              name="password"
              onChange={ this.setValue }
              type="password"
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            type="submit"
            disabled={ isLoading }
          >
            { i18n.t('session:submit') }
          </Button>
        </Form>
      </Modal>
    );
  }
}

SigninModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  session: PropTypes.object.isRequired,
  signinUser: PropTypes.func.isRequired
};

export default SigninModal;
