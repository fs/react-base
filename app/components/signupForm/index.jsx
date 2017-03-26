import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import Form from 'components/form';

export default class SignupForm extends Component {
  static propTypes = {
    signupUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {}
  }

  setValue = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  isFormValid = () => {
    const { name, email, password, passwordConfirmation } = this.state;

    return (
      name.trim().length &&
      email.length > 5 &&
      password.length > 5 &&
      passwordConfirmation.length > 5 &&
      this.isValidPassword()
    );
  }

  isValidPassword = () => {
    const { password, passwordConfirmation } = this.state;

    return password === passwordConfirmation;
  }

  validationState = (value) => {
    const length = value.length;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  nameValidationState = (value) => {
    const length = value.trim().length;

    if (!length) return null;

    return length ? 'success' : 'error';
  }

  passwordValidationState = (value) => {
    const length = value.length;

    if (!length) return null;

    (this.isValidPassword() && length > 5) ? 'success' : 'error';
  }

  signUp = (event) => {
    event.preventDefault();

    const { name, email, password, passwordConfirmation } = this.state;
    const { signupUser, closeModal } = this.props;

    if (this.isFormValid()) {
      signupUser({ name, email, password, passwordConfirmation })
        .then(() => {
          this.setState({
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
          });
          closeModal();
        })
        .catch(({ errors }) => this.setState({ errors }));
    }
  }

  render() {
    const { name, email, password, passwordConfirmation } = this.state;
    const { isLoading } = this.props;

    return (
      <Form onSubmit={ this.signUp }>
        <Modal.Body>
          <FormGroup
            controlId="name"
            validationState={ this.nameValidationState(name) }
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
              onChange={ this.setValue }
            />
          </FormGroup>
          <FormGroup
            controlId="email"
            validationState={ this.validationState(email) }
          >
            <ControlLabel>Email</ControlLabel>
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
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password"
              onChange={ this.setValue }
            />
          </FormGroup>
          <FormGroup
            controlId="passwordConfirmation"
            validationState={ this.passwordValidationState(passwordConfirmation) }
          >
            <ControlLabel>Password Confirmation</ControlLabel>
            <FormControl
              type="password"
              name="passwordConfirmation"
              onChange={ this.setValue }
            />
          </FormGroup>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit" disabled={ isLoading }>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    );
  }
}
