import React from 'react';
import renderer from 'react-test-renderer';
import SigninForm from '../';

describe('SigninForm', () => {
  it('renders correctly', () => {
    const signinFormComponent = renderer.create(<SigninForm />).toJSON();

    expect(signinFormComponent).toMatchSnapshot();
  });

  context('when email and password are invalid', () => {
    it('renders form with validation errors', () => {
      // const signinFormComponent = renderer.create(<SigninForm />).toJSON();
      //
      // expect(signinFormComponent).toMatchSnapshot();
    });
  });
});
