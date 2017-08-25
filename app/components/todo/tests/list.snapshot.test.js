import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../list';

describe('TodoList', () => {
  it('renders correctly', () => {
    const todos = [
      { id: 1, isComplete: false, name: 'Something to do 1' },
      { id: 2, isComplete: false, name: 'Something to do 2' },
      { id: 3, isComplete: false, name: 'Something to do 3' }
    ];
    const todoListComponent = renderer.create(<TodoList todos={ todos } />);

    expect(todoListComponent.toJSON()).toMatchSnapshot();
  });
});
