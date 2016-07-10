import React from 'react';
import { mount } from 'enzyme';
import { ListGroupItem } from 'react-bootstrap';
import Todo from 'components/todo';
import TodosActions from 'actions/todos';

describe('Todo', function() {
  const todo = { id: 1, isComplete: false, name: "Something to do" };

  beforeEach(function() {
    this.todoComponent = mount(<Todo todo={ todo }/>);
  });

  it('renders Todo component with child components', function() {
    expect(this.todoComponent.find(ListGroupItem).length).toEqual(1);
  });

  it('shows todo\'s name', function() {
    expect(this.todoComponent.find(ListGroupItem).text()).toEqual(todo.name);
  });

  it('calls toogle() when clicking on li and mark todo as complete', function() {
    spyOn(TodosActions, 'update');
    this.todoComponent.find(ListGroupItem).at(0).simulate('click');

    expect(TodosActions.update).toHaveBeenCalled();
    expect(this.todoComponent.props().todo.isComplete).toEqual(true);
  });

  it('calls delete() when clicking on delete icon', function() {
    spyOn(TodosActions, 'delete');
    this.todoComponent.find('.glyphicon-trash').simulate('click');

    expect(TodosActions.delete).toHaveBeenCalled();
  });
});
