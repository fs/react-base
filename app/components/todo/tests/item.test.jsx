import React from 'react';
import { mount } from 'enzyme';
import TodoItem from '../item';

describe('TodoItem', () => {
  let props;
  let component;
  const renderComponent = () => mount(<TodoItem {...props} />);

  describe('callbacks', () => {
    const deleteTodo = jest.fn();
    const updateTodo = jest.fn();

    beforeEach(() => {
      props = {
        deleteTodo,
        updateTodo,
        todo: {
          id: 1,
          isComplete: false,
          name: 'Some Todo',
        },
      };
    });

    it('calls .updateTodo() when clicking on li and mark todo as complete', () => {
      component = renderComponent();
      component.find('ListGroupItem').simulate('click');

      expect(updateTodo).toHaveBeenCalledWith({
        id: 1,
        isComplete: true,
        name: 'Some Todo',
      });
    });

    it('calls .deleteTodo() when clicking on delete icon', () => {
      component = renderComponent();
      component.find('.glyphicon-trash').simulate('click');

      expect(deleteTodo).toHaveBeenCalledWith({
        id: 1,
        isComplete: false,
        name: 'Some Todo',
      });
    });
  });
});
