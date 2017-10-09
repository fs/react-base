import React from 'react';
import renderer from 'react-test-renderer';
import SigninForm from '../';

describe('SigninForm', () => {
  it('renders correctly', () => {
    const signinFormComponent = renderer.create(<SigninForm />);

    expect(signinFormComponent.toJSON()).toMatchSnapshot();
  });

  context('when email and password are invalid', () => {
    it('renders form with validation errors', () => {
      const signinFormComponent = renderer.create(<SigninForm />);

      signinFormComponent.getInstance().setState({
        email: 'qwe',
        password: 'asd'
      });

      expect(signinFormComponent.toJSON()).toMatchSnapshot();
    });
  });
});
