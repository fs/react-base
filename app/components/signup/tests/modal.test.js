import React from 'react';
import { shallow } from 'enzyme';
import fakeSession from 'mocks/fakeSession';
import SignupModal from '../modal';

describe('Signup Modal', () => {
  let props;
  let component;
  const renderComponent = () => shallow(<SignupModal { ...props }/>);

  beforeEach(() => {
    props = {
      closeModal: jest.fn(),
      isOpen: true,
      session: fakeSession,
      signupUser: jest.fn()
    };
  });

  describe('.isValidPassword', () => {
    beforeEach(() => {
      component = renderComponent().instance();
      component.setState({
        password: '123456',
        passwordConfirmation: '123456'
      });
    });

    it('returns true', () => {
      expect(component.isValidPassword()).toBeTruthy();
    });

    context('when password is NOT equal to passwordConfirmation', () => {
      beforeEach(() => {
        component.setState({
          passwordConfirmation: '098765'
        });
      });

      it('returns false', () => {
        expect(component.isValidPassword()).toBeFalsy();
      });
    });
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

  describe('.nameValidationState', () => {
    let name;

    beforeEach(() => {
      component = renderComponent().instance();
      name = 'some name';
    });

    it('returns "success"', () => {
      expect(component.nameValidationState(name)).toEqual('success');
    });

    context('when name is empty', () => {
      beforeEach(() => {
        name = '';
      });

      it('returns null', () => {
        expect(component.nameValidationState(name)).toBeNull();
      });
    });

    context('when name contains only spaces', () => {
      beforeEach(() => {
        name = '   ';
      });

      it('returns null', () => {
        expect(component.nameValidationState(name)).toBeNull();
      });
    });
  });

  describe('.passwordValidationState', () => {
    let password;
    const isValidPasswordMock = jest.fn();

    beforeEach(() => {
      component = renderComponent().instance();
      password = '123456';
      isValidPasswordMock.mockReturnValue(true);

      component.isValidPassword = isValidPasswordMock;
      component.setState({
        password: '123456',
        passwordConfirmation: '123456'
      });
    });

    it('returns "success"', () => {
      expect(component.passwordValidationState(password)).toEqual('success');
    });

    context('when password is empty', () => {
      beforeEach(() => {
        password = '';
      });

      it('returns null', () => {
        expect(component.passwordValidationState(password)).toBeNull();
      });
    });

    context('when password is NOT equal to passwordConfirmation', () => {
      beforeEach(() => {
        isValidPasswordMock.mockReturnValue(false);
      });

      it('returns null', () => {
        expect(component.passwordValidationState(password)).toEqual('error');
      });
    });

    context('when password length is less than 5', () => {
      beforeEach(() => {
        password = 'some';
      });

      it('returns "error"', () => {
        expect(component.passwordValidationState(password)).toEqual('error');
      });
    });
  });

  describe('.isFormValid', () => {
    let formFields;
    const isValidPasswordMock = jest.fn();

    beforeEach(() => {
      component = renderComponent().instance();
      formFields = {
        name: 'some name',
        email: 'test@test.com',
        password: '123456',
        passwordConfirmation: '123456'
      };

      isValidPasswordMock.mockReturnValue(true);
      component.isValidPassword = isValidPasswordMock;

      component.setState(formFields);
    });

    it('returns true', () => {
      expect(component.isFormValid()).toBeTruthy();
    });

    context('when name field is invalid', () => {
      beforeEach(() => {
        formFields.name = '';

        component.setState(formFields);
      });

      it('returns false', () => {
        expect(component.isFormValid()).toBeFalsy();
      });
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

    context('when passwordConfirmation field is invalid', () => {
      beforeEach(() => {
        formFields.passwordConfirmation = '';

        component.setState(formFields);
      });

      it('returns false', () => {
        expect(component.isFormValid()).toBeFalsy();
      });
    });

    context('when password is NOT equal to passwordConfirmation', () => {
      beforeEach(() => {
        isValidPasswordMock.mockReturnValue(false);
      });

      it('returns false', () => {
        expect(component.isFormValid()).toBeFalsy();
      });
    });
  });
});
