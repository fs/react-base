import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import { Simulate } from 'react-dom/lib/ReactTestUtils';
import SignupModal from 'components/signupModal';

/* eslint-disable max-statements */
describe('Signup Modal', () => {
  const state = { isModalOpen: true };
  const signupModalComponent = mount(<SignupModal />);
  let modalDialogContent;

  beforeAll(() => {
    signupModalComponent.setState(state);
    modalDialogContent = signupModalComponent.find(Modal).node._modal.getDialogElement();
  });

  afterAll(() => {
    signupModalComponent.unmount();
  });

  it('has Modal component', () => {
    expect(signupModalComponent.find(Modal).length).toEqual(1);
  });

  it('renders Modal with form fields', () => {
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(4);
  });

  describe('when name is empty', () => {
    it('appears error class', () => {
      const nameInput = modalDialogContent.querySelector('[name=name]');

      Simulate.change(nameInput, {
        target: {
          name: 'name',
          value: ''
        }
      });

      expect(nameInput.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when name is valid', () => {
    it('appears success class', () => {
      const nameInput = modalDialogContent.querySelector('[name=name]');

      Simulate.change(nameInput, {
        target: {
          name: 'name',
          value: 'someName'
        }
      });

      expect(nameInput.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when email is too short', () => {
    it('appears error class', () => {
      const inputEmail = modalDialogContent.querySelector('[name=email]');

      Simulate.change(inputEmail, {
        target: {
          name: 'email',
          value: 'short'
        }
      });

      expect(inputEmail.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when email is valid', () => {
    it('appears success class', () => {
      const inputEmail = modalDialogContent.querySelector('[name=email]');

      Simulate.change(inputEmail, {
        target: {
          name: 'email',
          value: 'email@example.com'
        }
      });

      expect(inputEmail.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when password is too short', () => {
    it('appears error class', () => {
      const inputPassword = modalDialogContent.querySelector('[name=password]');

      Simulate.change(inputPassword, {
        target: {
          name: 'password',
          value: 'short'
        }
      });

      expect(inputPassword.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when password is valid', () => {
    it('appears success class', () => {
      const inputPassword = modalDialogContent.querySelector('[name=password]');

      Simulate.change(inputPassword, {
        target: {
          name: 'password',
          value: 'strongPassword'
        }
      });

      expect(inputPassword.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when the passwords match', () => {
    it('appears success class', () => {
      const passwordInput = modalDialogContent.querySelector('[name=password]');
      const passwordConfirmationInput = modalDialogContent.querySelector('[name=passwordConfirmation]');

      Simulate.change(passwordInput, {
        target: {
          name: 'password',
          value: 'superSecurityPassword'
        }
      });

      Simulate.change(passwordConfirmationInput, {
        target: {
          name: 'passwordConfirmation',
          value: 'superSecurityPassword'
        }
      });

      expect(passwordConfirmationInput.parentElement.classList.contains('has-success')).toEqual(true);
      expect(passwordInput.value).toEqual(passwordConfirmationInput.value);
    });
  });
});
/* eslint-enable max-statements */
