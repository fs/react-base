import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import SigninModal from 'components/signinModal';

describe('Signin Modal', () => {
  const state = {
    isModalOpen: true,
    user: {
      email: '',
      password: ''
    }
  };
  const signinModalComponent = mount(<SigninModal />);
  signinModalComponent.setState(state);
  const modalDialogContent = signinModalComponent.find(Modal).node._modal.getDialogElement();

  it('renders Modal with form fields', () => {
    expect(signinModalComponent.find(Modal).length).toEqual(1);
    expect(modalDialogContent.getElementsByClassName('form-group').length).toEqual(2);
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(2);
  });

  it('input email has error class', () => {
    const inputEmail = modalDialogContent.querySelector('[name=email]');
    ReactTestUtils.Simulate.change(inputEmail, {
      target: {
        name: 'email',
        value: 'short'
      }
    });

    expect(inputEmail.parentElement.classList.contains('has-error')).toEqual(true);
  });

  it('input email has success class', () => {
    const inputEmail = modalDialogContent.querySelector('[name=email]');
    ReactTestUtils.Simulate.change(inputEmail, {
      target: {
        name: 'email',
        value: 'longString'
      }
    });

    expect(inputEmail.parentElement.classList.contains('has-success')).toEqual(true);
  });
});
