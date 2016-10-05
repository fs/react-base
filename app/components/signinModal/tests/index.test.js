import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import { inputHasErrorClass, inputHasSuccessClass, simulateInputChange } from 'lib/test_helpers';
import SigninModal from 'components/signinModal';

/* eslint-disable max-statements */
describe('Signin Modal', () => {
  const state = { isModalOpen: true };
  const signinModalComponent = mount(<SigninModal />);
  let emailInput,
    passwordInput,
    modalDialogContent;

  beforeAll(() => {
    signinModalComponent.setState(state);
    modalDialogContent = signinModalComponent.find(Modal).node._modal.getDialogElement();
    passwordInput = modalDialogContent.querySelector('[name=password]');
    emailInput = modalDialogContent.querySelector('[name=email]');
  });

  afterAll(() => {
    signinModalComponent.unmount();
  });

  it('has Modal component', () => {
    expect(signinModalComponent.find(Modal).length).toEqual(1);
  });

  it('renders Modal with form fields', () => {
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(2);
  });

  describe('when password is too short', () => {
    it('appears error class', () => {
      simulateInputChange(passwordInput, 'password', 'short');

      expect(inputHasErrorClass(passwordInput)).toEqual(true);
    });
  });

  describe('when password is valid', () => {
    it('appears success class', () => {
      simulateInputChange(passwordInput, 'password', 'strongPassword');

      expect(inputHasSuccessClass(passwordInput)).toEqual(true);
    });
  });

  describe('when email is too short', () => {
    it('appears error class', () => {
      simulateInputChange(emailInput, 'email', 'short');

      expect(inputHasErrorClass(emailInput)).toEqual(true);
    });
  });

  describe('when email is valid', () => {
    it('appears success class', () => {
      simulateInputChange(passwordInput, 'email', 'email@example.com');

      expect(inputHasSuccessClass(emailInput)).toEqual(true);
    });
  });
});
/* eslint-enable max-statements */
