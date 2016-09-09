import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import SignupModal from 'components/signupModal';

describe('Signup Modal', () => {
  const state = { isModalOpen: true };
  const signupModalComponent = mount(<SignupModal />);
  let modalDialogContent;

  beforeEach(() => {
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

  describe('when email is empty', () => {
    it('includes error class', () => {
      const inputEmail = modalDialogContent.querySelector('[name=email]');

      ReactTestUtils.Simulate.change(inputEmail, {
        target: {
          name: 'email',
          value: ''
        }
      });

      expect(inputEmail.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when email is filled', () => {
    it('includes success class', () => {
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
});
