import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import SigninModal from 'components/signinModal';

describe('Signin Modal', () => {
  const state = { isModalOpen: true };
  const signinModalComponent = mount(<SigninModal />);
  let modalDialogContent;

  beforeEach(() => {
    signinModalComponent.setState(state);
    modalDialogContent = signinModalComponent.find(Modal).node._modal.getDialogElement();
  });

  it('has Modal component', () => {
    expect(signinModalComponent.find(Modal).length).toEqual(1);
  });

  it('renders Modal with form fields', () => {
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(2);
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
