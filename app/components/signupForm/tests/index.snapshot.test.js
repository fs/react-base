import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from '../';

describe('SignupForm', () => {
  it('renders correctly', () => {
    const signupFormComponent = renderer.create(<SignupForm />);

    expect(signupFormComponent.toJSON()).toMatchSnapshot();
  });

  context('when form fields are invalid', () => {
    it('renders form with validation errors', () => {
      const signupFormComponent = renderer.create(<SignupForm />);

      signupFormComponent.getInstance().setState({
        name: 'qwe',
        email: 'qwe',
        password: 'asd',
        passwordConfirmation: 'asd'
      });

      expect(signupFormComponent.toJSON()).toMatchSnapshot();
    });
  });
});
