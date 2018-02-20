import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from '../item';

describe('TodoItem', () => {
  let props;
  const renderComponent = () => renderer.create(<TodoItem {...props} />);

  beforeEach(() => {
    props = {
      deleteTodo: () => {},
      todo: {
        id: 1,
        isComplete: false,
        name: 'Something to do',
      },
      updateTodo: () => {},
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
