import React from 'react';
import { shallow } from 'enzyme';
import Main from '../';

jest.mock('containers/todo', () => 'TodoContainer');

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

    it('renders Home component', () => {
      const mainComponent = renderComponent();
      const todoContainer = mainComponent.find('TodoContainer');

      expect(todoContainer).toBePresent();
    });
  });
});
