import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from '../';

describe('TodoForm', () => {
  it('renders correctly', () => {
    const todoFormComponent = renderer.create(<TodoForm />);

    expect(todoFormComponent.toJSON()).toMatchSnapshot();
  });

  context('when name is invalid', () => {
    it('renders form with validation error', () => {
      const todoFormComponent = renderer.create(<TodoForm />);

      todoFormComponent.getInstance().setState({ name: 'qwe' });

      expect(todoFormComponent.toJSON()).toMatchSnapshot();
    });
  });
});
