import React from 'react';
import { mount } from 'enzyme';
import { Nav, NavItem } from 'react-bootstrap';
import NavigationRight from 'components/navigation/right';
import session from 'services/session';
import ApplicationActions from 'actions/application';
import SessionActions from 'actions/session';

describe('NavigationRight', () => {
  describe('when user is signed in', () => {
    beforeEach(() => {
      spyOn(session, 'loggedIn').and.returnValue(true);
    });

    it('renders NavigationRight with Nav and NavItem', () => {
      const navigationRightComponent = mount(<NavigationRight />);
      const navs = navigationRightComponent.find(Nav);
      const navItems = navigationRightComponent.find(NavItem);

      expect(navs.length).toEqual(1);
      expect(navItems.length).toEqual(2);
      expect(navItems.at(0).text()).toEqual('New Task');
      expect(navItems.at(1).text()).toEqual('Sign out');
    });

    it('calls ApplicationActions.openModal({ name: todo })', () => {
      spyOn(ApplicationActions, 'openModal');
      const navigationRightComponent = mount(<NavigationRight/>);
      navigationRightComponent.find('a').at(0).simulate('click');

      expect(ApplicationActions.openModal).toHaveBeenCalledWith({ name: 'todo' });
    });

    it('calls SessionActions.delete()', () => {
      spyOn(SessionActions, 'delete');
      const navigationRightComponent = mount(<NavigationRight />);
      navigationRightComponent.find('a').at(1).simulate('click');

      expect(SessionActions.delete).toHaveBeenCalled();
    });
  });

  describe('when user is not signed in', () => {
    it('renders NavigationRight with Nav and NavItem', () => {
      const navigationRightComponent = mount(<NavigationRight />);
      const navs = navigationRightComponent.find(Nav);
      const navItems = navigationRightComponent.find(NavItem);

      expect(navs.length).toEqual(1);
      expect(navItems.length).toEqual(2);
      expect(navItems.at(0).text()).toEqual('Sign up');
      expect(navItems.at(1).text()).toEqual('Sign in');
    });

    it('calls ApplicationActions.openModal({ name: signUp }', () => {
      spyOn(ApplicationActions, 'openModal');
      const navigationRightComponent = mount(<NavigationRight />);
      navigationRightComponent.find('a').at(0).simulate('click');

      expect(ApplicationActions.openModal).toHaveBeenCalledWith({ name: 'signUp' });
    });

    it('calls ApplicationActions.openModal({ name: signIn })', () => {
      spyOn(ApplicationActions, 'openModal');
      const navigationRightComponent = mount(<NavigationRight />);
      navigationRightComponent.find('a').at(1).simulate('click');

      expect(ApplicationActions.openModal).toHaveBeenCalledWith({ name: 'signIn' });
    });
  });
});
