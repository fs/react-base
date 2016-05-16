import React from 'react';
import { mount } from 'enzyme';
import MainLayout from 'components/main/view';
import TodoLayout from 'components/todo/layout';
import Dashboard from 'components/dashboard/view';
import session from 'services/session';

describe('MainLayout', () => {
  it('renders Dashboard component', () => {
    const mainLayoutComponent = mount(<MainLayout/>);

    expect(mainLayoutComponent.contains(<Dashboard/>)).toEqual(true);
  });

  describe('when session is created', () => {
    it('renders TodoLayout component', () => {
      spyOn(session, 'loggedIn').and.returnValue(true);
      const mainLayoutComponent = mount(<MainLayout/>);

      expect(mainLayoutComponent.contains(<TodoLayout/>)).toEqual(true);
    });
  });
});
