import React from 'react';
import { mount } from 'enzyme';
import { Grid, Row, Button } from 'react-bootstrap';
import TodoLayout from 'components/todo/layout';
import ApplicationActions from 'actions/application';

describe('TodoLayout', function() {
  const todos = [
    { id: 1, isComplete: false, name: "Become react expect" }
  ];

  beforeEach(function() {
    this.todoLayoutComponent = mount(<TodoLayout todos={ todos }/>);
  });

  it('renders Todo component with child components', function() {
    expect(this.todoLayoutComponent.find(Grid).length).toEqual(1);
    expect(this.todoLayoutComponent.find(Row).length).toEqual(2);
    expect(this.todoLayoutComponent.find('h3').at(0).text()).toEqual('Incomplete');
    expect(this.todoLayoutComponent.find('h3').at(1).text()).toEqual('Complete');
  });

  it('receives correct props', function() {
    expect(this.todoLayoutComponent.props().todos).toEqual(todos);
  });

  it('calls create() when clicking on New Task button', function() {
    spyOn(ApplicationActions, 'openModal');
    this.todoLayoutComponent.find(Button).simulate('click');

    expect(ApplicationActions.openModal).toHaveBeenCalled();
  });
});
