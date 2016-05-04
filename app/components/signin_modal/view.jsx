import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SigninStore from 'stores/signin';

@connectToStores
export default class SigninModal extends React.Component {
  static propTypes = {
    showModal: React.PropTypes.bool,
    user: React.PropTypes.shape({
      email: React.PropTypes.string,
      password: React.PropTypes.string
    })
  }

  static getStores(props) {
    return [SigninStore];
  }

  static getPropsFromStores(props) {
    return SigninStore.getState();
  }

  setValue(event) {
    SigninActions.setValue(event.target.name, event.target.value);
  }

  signIn() {
    if (this.isValid()) {
      SessionActions.create(this.props.user);
      SigninActions.hide();
    }
  }

  isValid() {
    let valid = true;

    Object.keys(this.props.user).forEach((key) => {
      if (this.props.user[key].trim().length < 6) valid = false;
    });

    return valid;
  }

  validationState(value) {
    return value.length >= 6 ? 'success' : 'error';
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.props.showModal }
        onHide={ SigninActions.hide }
        onExited={ SigninActions.reset }
      >
        <Modal.Header closeButton>
          <h3 className="modal-title">Sign In</h3>
        </Modal.Header>

        <form>
          <Modal.Body>
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
          </Modal.Body>

          <Modal.Footer>
            <Button
              bsStyle="primary"
              onClick={ ::this.signIn }
            >
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
