import React from 'react';
import { mount } from 'enzyme';
import Main from '../';

jest.mock('containers/todo', () => 'TodoContainer');

describe('Main', () => {
  let logged;

  const renderComponent = () => mount(<Main loggedIn={ logged } />);

  beforeEach(() => logged = false);

  it('renders Home component', () => {
    const mainComponent = renderComponent();
    const home = mainComponent.find('Home');

    expect(home).toBePresent();
  });

  context('when user is logged in', () => {
    beforeEach(() => logged = true);

    it('renders TodoContainer component', () => {
      const mainComponent = renderComponent();
      const todoContainer = mainComponent.find('TodoContainer');

      expect(todoContainer).toBePresent();
    });
  });
});
