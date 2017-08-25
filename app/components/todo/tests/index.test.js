import React from 'react';
import { mount } from 'enzyme';
import { ListGroupItem } from 'react-bootstrap';
import Todo from 'components/todo';

describe('Todo', () => {
  const todo = { id: 1, isComplete: false, name: 'Something to do' };

  describe('callbacks', () => {
    const updateTodo = jest.fn();
    const deleteTodo = jest.fn();
    const todoComponent = mount(
      <Todo
        updateTodo={ updateTodo }
        deleteTodo={ deleteTodo }
        todo={ todo }
      />
    );

    it('calls toggle() when clicking on li and mark todo as complete', () => {
      todoComponent.find(ListGroupItem).at(0).simulate('click');
      expect(updateTodo).toHaveBeenCalled();
    });

    it('calls delete() when clicking on delete icon', () => {
      todoComponent.find('.glyphicon-trash').simulate('click');
      expect(deleteTodo).toHaveBeenCalled();
    });
  });
});
