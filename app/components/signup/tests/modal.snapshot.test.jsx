import React from 'react';
import renderer from 'react-test-renderer';
import { fakeSession } from 'mocks/fakeSession';
import SignupModal from '../modal';

jest.mock('components/modal', () => 'Modal');

describe('SignupModal', () => {
  let props;
  let component;
  const renderComponent = () => renderer.create(<SignupModal {...props} />);

  beforeEach(() => {
    props = {
      closeModal: () => { },
      isOpen: true,
      session: fakeSession,
      signupUser: () => { },
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });

  context('when form is invalid', () => {
    beforeEach(() => {
      component = renderComponent();

      component.getInstance().setState({
        name: 'qwe',
        email: 'qwe',
        password: 'asd',
        passwordConfirmation: 'asd',
      });
    });

    it('renders form with validation errors', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
