import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import Form from 'components/form';

export default class SigninForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    signinUser: PropTypes.func.isRequired
  }

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

  signIn = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { signinUser, closeModal } = this.props;

    if (this.isFormValid()) {
      signinUser({ email, password })
        .then(() => {
          this.setState({ email: '', password: '' });
          closeModal();
        })
        .catch(({ errors }) => this.setState({ errors }));
    }
  }

  validationState = value => {
    const length = value.length;

    if (!length) return null;

    return length > 5 ? 'success' : 'error';
  }

  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;

    return (
      <Form onSubmit={ this.signIn }>
        <Modal.Body>
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
              autoComplete="off"
              name="password"
              onChange={ this.setValue }
              type="password"
            />
          </FormGroup>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              type="submit"
              disabled={ isLoading }
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    );
  }
}
