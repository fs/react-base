import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../list';

describe('TodoList', () => {
  let props;
  const renderComponent = () => shallow(<TodoList {...props} />);

  beforeEach(() => {
    props = {
      deleteTodo: () => {},
      todos: [
        { id: 1, isComplete: false, name: 'Something to do 1' },
        { id: 2, isComplete: false, name: 'Something to do 2' },
      ],
      updateTodo: () => {},
    };
  });

  it('renders correctly', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });
});
