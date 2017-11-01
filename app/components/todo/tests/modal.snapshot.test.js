import React from 'react';
import renderer from 'react-test-renderer';
import TodoModal from '../modal';

jest.mock('components/modal', () => 'Modal');

describe('TodoModal', () => {
  let props;
  let component;
  const renderComponent = () => renderer.create(<TodoModal { ...props } />);

  beforeEach(() => {
    props = {
      closeModal: () => { },
      createTodo: () => { },
      isOpen: true
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });

  context('when form is invalid', () => {
    beforeEach(() => {
      component = renderComponent();

      component.getInstance().setState({ email: 'qwe' });
    });

    it('renders form with validation errors', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
