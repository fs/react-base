import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import SigninModal from 'components/signinModal';

/* eslint-disable max-statements */
describe('Signin Modal', () => {
  const state = { isModalOpen: true };
  const signinModalComponent = mount(<SigninModal />);
  let modalDialogContent;

  beforeAll(() => {
    signinModalComponent.setState(state);
    modalDialogContent = signinModalComponent.find(Modal).node._modal.getDialogElement();
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
      const inputPassword = modalDialogContent.querySelector('[name=password]');

      ReactTestUtils.Simulate.change(inputPassword, {
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

      ReactTestUtils.Simulate.change(inputPassword, {
        target: {
          name: 'password',
          value: 'strongPassword'
        }
      });

      expect(inputPassword.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when email is too short', () => {
    it('appears error class', () => {
      const inputEmail = modalDialogContent.querySelector('[name=email]');

      ReactTestUtils.Simulate.change(inputEmail, {
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

      ReactTestUtils.Simulate.change(inputEmail, {
        target: {
          name: 'email',
          value: 'email@example.com'
        }
      });

      expect(inputEmail.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });
});
/* eslint-enable max-statements */
