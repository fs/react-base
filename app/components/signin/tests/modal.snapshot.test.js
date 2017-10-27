import React from 'react';
import renderer from 'react-test-renderer';
import SigninModal from '../modal';
import fakeSession from 'mocks/fakeSession';

jest.mock('components/modal', () => 'Modal');

describe('SigninModal', () => {
  let props;
  let component;
  const renderComponent = () => renderer.create(<SigninModal { ...props } />);

  beforeEach(() => {
    props = {
      closeModal: () => {},
      isOpen: true,
      session: fakeSession,
      signinUser: () => {}
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });

  context('when form is invalid', () => {
    beforeEach(() => {
      component = renderComponent();

      component.getInstance().setState({
        email: 'qwe',
        password: 'asd'
      });
    });

    it('renders form with validation errors', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
