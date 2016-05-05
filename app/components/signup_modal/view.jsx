import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SignupActions from 'actions/signup';
import SignupStore from 'stores/signup';

@connectToStores
export default class SignupModal extends React.Component {
  static propTypes = {
    showModal: React.PropTypes.bool,
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
      email: React.PropTypes.string,
      password: React.PropTypes.string,
      passwordConfirmation: React.PropTypes.string
    })
  }

  static getStores(props) {
    return [SignupStore];
  }

  static getPropsFromStores(props) {
    return SignupStore.getState();
  }

  setValue(event) {
    SignupActions.setValue(event.target.name, event.target.value);
  }

  signUp(event) {
    event.preventDefault();

    if (this.isValid()) {
      SignupActions.create(this.props.user);
      SignupActions.hide();
    }
  }

  isValid() {
    const user = this.props.user;

    return (
      user.name.trim().length &&
      user.email.length >= 6 &&
      user.password.length >= 6 &&
      user.passwordConfirmation.length >= 6 &&
      this.isValidPassword()
    );
  }

  isValidPassword() {
    return this.props.user.password === this.props.user.passwordConfirmation;
  }

  validationState(value) {
    return value.length >= 6 ? 'success' : 'error';
  }

  nameValidationState(value) {
    return value.trim().length ? 'success' : 'error';
  }

  passwordValidationState(value) {
    return (this.isValidPassword() && value.length >= 6) ? 'success' : 'error';
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.props.showModal }
        onHide={ SignupActions.hide }
        onExited={ SignupActions.reset }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">Sign Up</h3>
        </Modal.Header>

        <form onSubmit={ ::this.signUp }>
          <Modal.Body>
            <FormGroup
              controlId="name"
              validationState={ ::this.nameValidationState(this.props.user.name) }
            >
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                onChange={ ::this.setValue }
              />
            </FormGroup>
            <FormGroup
              controlId="email"
              validationState={ ::this.validationState(this.props.user.email) }
            >
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                name="email"
                onChange={ ::this.setValue }
              />
            </FormGroup>
            <FormGroup
              controlId="password"
              validationState={ ::this.validationState(this.props.user.password) }
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="text"
                name="password"
                onChange={ ::this.setValue }
              />
            </FormGroup>
            <FormGroup
              controlId="passwordConfirmation"
              validationState={ ::this.passwordValidationState(this.props.user.passwordConfirmation) }
            >
              <ControlLabel>Password Confirmation</ControlLabel>
              <FormControl
                type="text"
                name="passwordConfirmation"
                onChange={ ::this.setValue }
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button
              bsStyle="primary"
              type="submit"
            >
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
