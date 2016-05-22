import React from 'react';
import { mount } from 'enzyme';
import { Nav, NavItem } from 'react-bootstrap';
import NavigationRight from 'components/navigation/right';
import session from 'services/session';
import TodoActions from 'actions/todo';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SignupActions from 'actions/signup';

describe('NavigationRight', () => {
  describe('when user is signed in', () => {
    beforeEach(() => {
      spyOn(session, 'loggedIn').and.returnValue(true);
    });

    it('renders NavigationRight with Nav and NavItem', () => {
      const navigationRightComponent = mount(<NavigationRight/>);
      const navs = navigationRightComponent.find(Nav);
      const navItems = navigationRightComponent.find(NavItem);

      expect(navs.length).toEqual(1);
      expect(navItems.length).toEqual(2);
      expect(navItems.at(0).text()).toEqual('New Task');
      expect(navItems.at(1).text()).toEqual('Sign out');
    });

    it('calls TodoActions.show()', () => {
      spyOn(TodoActions, 'show');
      const navigationRightComponent = mount(<NavigationRight/>);
      navigationRightComponent.find('a').at(0).simulate('click');

      expect(TodoActions.show).toHaveBeenCalled();
    });

    it('calls SessionActions.delete', () => {
      spyOn(SessionActions, 'delete');
      const navigationRightComponent = mount(<NavigationRight/>);
      navigationRightComponent.find('a').at(1).simulate('click');

      expect(SessionActions.delete).toHaveBeenCalled();
    });
  });

  describe('when user is not signed in', () => {
    it('renders NavigationRight with Nav and NavItem', () => {
      const navigationRightComponent = mount(<NavigationRight/>);
      const navs = navigationRightComponent.find(Nav);
      const navItems = navigationRightComponent.find(NavItem);

      expect(navs.length).toEqual(1);
      expect(navItems.length).toEqual(2);
      expect(navItems.at(0).text()).toEqual('Sign up');
      expect(navItems.at(1).text()).toEqual('Sign in');
    });

    it('calls SignupActions.show()', () => {
      spyOn(SignupActions, 'show');
      const navigationRightComponent = mount(<NavigationRight/>);
      navigationRightComponent.find('a').at(0).simulate('click');

      expect(SignupActions.show).toHaveBeenCalled();
    });

    it('calls SessionActions.delete', () => {
      spyOn(SigninActions, 'show');
      const navigationRightComponent = mount(<NavigationRight/>);
      navigationRightComponent.find('a').at(1).simulate('click');

      expect(SigninActions.show).toHaveBeenCalled();
    });
  });
});
