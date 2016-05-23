import React from 'react';
import { shallow, mount } from 'enzyme';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SigninModal from 'components/signin_modal/view';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SigninStore from 'stores/signin';

describe('SignInModal', () => {
  const props = {
    showModal: true,
    user: {
      email: '',
      password: ''
    }
  };
  const signinModalComponent = mount(<SigninModal/>);
  signinModalComponent.setProps(props);

  it('renders Modal with form fields', () => {
    expect(signinModalComponent.find(Modal).length).toEqual(1);
    expect(signinModalComponent.find(ControlLabel).length).toEqual(2);
    expect(signinModalComponent.find(FormControl).length).toEqual(2);
  });

  it('validationState method returns success', () => {
    expect(signinModalComponent.instance().validationState('longString')).toEqual('success');
  });

  it('validationState method returns error', () => {
    expect(signinModalComponent.instance().validationState('short')).toEqual('error');
  });
});
