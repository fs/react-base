import React from 'react';
import { mount } from 'enzyme';
import withI18n from 'i18n-test';
import Main from '../';

jest.mock('containers/todo', () => 'TodoContainer');

describe('Main', () => {
  let logged;

  const renderComponent = () => {
    return mount(withI18n(<Main loggedIn={ logged }/>));
  };

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
