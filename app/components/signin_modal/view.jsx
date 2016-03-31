import React from 'react';
import { Modal, Button, Input } from 'react-bootstrap';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SigninStore from 'stores/signin';

export default class SigninModal extends React.Component {
  state = SigninStore.getState()

  constructor() {
    super();

    this.changeState = ::this.changeState;
  }

  componentDidMount() {
    SigninStore.listen(this.changeState);
  }

  componentWillUnmount() {
    SigninStore.unlisten(this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  setEmail(event) {
    SigninActions.setEmail(event.target.value);
  }

  setPassword(event) {
    SigninActions.setPassword(event.target.value);
  }

  signUp() {
    SessionActions.create(this.state.user);
    SigninActions.hide();
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={ this.state.showModal }
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
            placeholder="Login"
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
