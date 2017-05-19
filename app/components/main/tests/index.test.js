import React from 'react';
import { shallow } from 'enzyme';
import Main from '../';

describe('Main', () => {
  let loggedIn;

  const renderComponent = () => shallow(<Main loggedIn={ loggedIn }/>);

  beforeEach(() => loggedIn = false);

  it('renders Home component', () => {
    const mainComponent = renderComponent();
    const home = mainComponent.find('Home');

    expect(home).toBePresent();
  });

  context('when user is logged in', () => {
    beforeEach(() => loggedIn = true);

    Main.__Rewire__('TodoContainer', () => <div id="todo_container_mock"/>);

    it('renders Home component', () => {
      const mainComponent = shallow(<Main loggedIn={ true }/>);
      const todoContainer = mainComponent.find('#todo_container_mock');
      console.log(mainComponent.html());

      expect(todoContainer).toBePresent();
    });
  });
});
