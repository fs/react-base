import React from 'react';
import renderer from 'react-test-renderer';
import Todo from '../';

describe('Todo', () => {
  it('renders correctly', () => {
    const todo = { id: 1, isComplete: false, name: 'Something to do' };
    const todoComponent = renderer.create(<Todo todo={ todo } />);

    expect(todoComponent.toJSON()).toMatchSnapshot();
  });
});
