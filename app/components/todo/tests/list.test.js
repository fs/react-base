import React from 'react';
import { mount } from 'enzyme';
import { ListGroup } from 'react-bootstrap';
import TodoList from 'components/todo/list';
import Todo from 'components/todo';

describe('TodoList', function() {
  const todos = [
    { id: 1, isComplete: false, name: "Become react expect" },
    { id: 2, isComplete: true, name: "Play some dotka" }
  ];

  beforeEach(function() {
    this.todoListComponent = mount(<TodoList todos={ todos }/>);
  });

  it('renders Todo component with child components', function() {
    expect(this.todoListComponent.find(ListGroup).length).toEqual(1);
    expect(this.todoListComponent.find(Todo).length).toEqual(2);
  });

  it('renders todos', function() {
    const renderedTodos = this.todoListComponent.find(Todo);

    expect(renderedTodos.at(0).text()).toContain(todos[0].name);
    expect(renderedTodos.at(1).text()).toContain(todos[1].name);
  });
});
