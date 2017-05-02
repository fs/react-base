import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { FormControl } from 'react-bootstrap';
import SigninForm from 'components/signinForm';

describe('Signin form', () => {
  const props = {
    closeModal: jest.fn(),
    signinUser: jest.fn(),
    isLoading: false
  };
  const signinFormComponent = mount(<SigninForm { ...props }/>);

  it('renders correctly', () => {
    const tree = renderer.create(<SigninForm/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('password field', () => {
    const inputPassword = signinFormComponent
      .find(FormControl)
      .filterWhere(n => n.props().name === 'password');

    it('appears error state when password is too short', () => {
      inputPassword.simulate('change', {
        target: { name: 'password', value: 'short' }
      });
      expect(inputPassword.parent().props().validationState).toEqual('error');
    });

    it('appears success state when password is strong', () => {
      inputPassword.simulate('change', {
        target: { name: 'password', value: 'strongPassword' }
      });
      expect(inputPassword.parent().props().validationState).toEqual('success');
    });
  });

  describe('email field', () => {
    const inputEmail = signinFormComponent
      .find(FormControl)
      .filterWhere(n => n.props().name === 'email');

    it('appears error state when email is too short', () => {
      inputEmail.simulate('change', {
        target: { name: 'email', value: 'short' }
      });
      expect(inputEmail.parent().props().validationState).toEqual('error');
    });

    it('appears success state when email is valid', () => {
      inputEmail.simulate('change', {
        target: { name: 'email', value: 'email@example.com' }
      });
      expect(inputEmail.parent().props().validationState).toEqual('success');
    });
  });
});
