import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Modal, Button, Input } from 'react-bootstrap';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SigninStore from 'stores/signin';

@connectToStores
export default class SigninModal extends React.Component {
  static getStores(props) {
    return [SigninStore];
  }

  static getPropsFromStores(props) {
    return SigninStore.getState();
  }

  setEmail(event) {
    SigninActions.setEmail(event.target.value);
  }

  setPassword(event) {
    SigninActions.setPassword(event.target.value);
  }

  signUp() {
    SessionActions.create(this.props.user);
    SigninActions.hide();
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
          <h3 className="modal-title">Sign Up</h3>
        </Modal.Header>

        <Modal.Body>
          <Input
            type="text"
            placeholder="Login"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={ ::this.setEmail }
          />
          <Input
            type="password"
            placeholder="Password"
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={ ::this.setPassword }
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="primary"
            onClick={ ::this.signUp }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
