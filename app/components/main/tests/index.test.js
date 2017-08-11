import React from 'react';
import { shallow } from 'enzyme';
import Main from '../';

jest.mock('containers/todo', () => 'TodoContainer');

describe('Main', () => {
  const renderComponent = ({ logged }) => shallow(<Main loggedIn={ logged } />);

  it('renders Home component', () => {
    const mainComponent = renderComponent({ logged: false });
    const home = mainComponent.find('Home');

    expect(home).toBePresent();
  });

  context('when user is logged in', () => {
    it('renders TodoContainer component', () => {
      const mainComponent = renderComponent({ logged: true });
      const todoContainer = mainComponent.find('TodoContainer');

      expect(todoContainer).toBePresent();
    });
  });
});
