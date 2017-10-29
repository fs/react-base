import React from 'react';
import { shallow } from 'enzyme';
import fakeSession from 'mocks/fakeSession';
import SigninModal from '../modal';

describe('Signin Modal', () => {
  let props;
  let component;
  const renderComponent = () => shallow(<SigninModal { ...props }/>);

  beforeEach(() => {
    props = {
      closeModal: jest.fn(),
      isOpen: true,
      session: fakeSession,
      signinUser: jest.fn()
    };
  });

  describe('.validationState', () => {
    let value;

    beforeEach(() => {
      component = renderComponent().instance();
      value = 'some value';
    });

    it('returns "success"', () => {
      expect(component.validationState(value)).toEqual('success');
    });

    context('when value is empty', () => {
      beforeEach(() => {
        value = '';
      });

      it('returns null', () => {
        expect(component.validationState(value)).toBeNull();
      });
    });

    context('when value length is less than 5', () => {
      beforeEach(() => {
        value = 'some';
      });

      it('returns "error"', () => {
        expect(component.validationState(value)).toEqual('error');
      });
    });
  });

  describe('.isFormValid', () => {
    let formFields;

    beforeEach(() => {
      component = renderComponent().instance();
      formFields = {
        email: 'test@test.com',
        password: '123456'
      };

      component.setState(formFields);
    });

    it('returns true', () => {
      expect(component.isFormValid()).toBeTruthy();
    });

    context('when email field is invalid', () => {
      beforeEach(() => {
        formFields.email = '';

        component.setState(formFields);
      });

      it('returns false', () => {
        expect(component.isFormValid()).toBeFalsy();
      });
    });

    context('when password field is invalid', () => {
      beforeEach(() => {
        formFields.password = '';

        component.setState(formFields);
      });

      it('returns false', () => {
        expect(component.isFormValid()).toBeFalsy();
      });
    });
  });
});
