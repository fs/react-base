import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import session from 'services/session';
import { closeModal } from 'actions/application';
import { setValue } from 'actions/signin';

class SigninModal extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool,
    user: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    })
  }

  setValue = ({ target }) => {
    const { dispatch } = this.props;

    dispatch(setValue(target.name, target.value));
  }

  signIn = (event) => {
    event.preventDefault();

    if (this.isValid()) {
      session.create(this.props.user);
      // ApplicationActions.closeModal();
    }
  }

  isValid() {
    const user = this.props.user;

    return user.email.length >= 6 && user.password.length >= 6;
  }

  validationState(value) {
    return value.length >= 6 ? 'success' : 'error';
  }

  hideModal = () => {
    const { dispatch } = this.props;

    dispatch(closeModal());
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.props.isModalOpen }
        onHide={ this.hideModal }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">Sign In</h3>
        </Modal.Header>

        <form onSubmit={ this.signIn }>
          <Modal.Body>
            <FormGroup
              controlId="email"
              validationState={ this.validationState(this.props.user.email) }
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
              validationState={ this.validationState(this.props.user.password) }
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                autoComplete="off"
                name="password"
                onChange={ this.setValue }
                type="password"
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button
              bsStyle="primary"
              type="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  ...state.application,
  ...state.signin
});

export default connect(mapStateToProps)(SigninModal);
