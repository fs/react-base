import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Nav, NavItem } from 'react-bootstrap';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import SignupActions from 'actions/signup';
import TodoActions from 'actions/todo';
import session from 'services/session';

@connectToStores
export default class NavigationRight extends React.Component {
  static getStores(props) {
    return [session.store()];
  }

  static getPropsFromStores(props) {
    return session.store().getState();
  }

  create() {
    TodoActions.show();
  }

  signIn() {
    SigninActions.show();
  }

  signUp() {
    SignupActions.show();
  }

  signOut() {
    SessionActions.delete(session.currentUser());
  }

  render() {
    if (session.loggedIn()) {
      return (
        <Nav pullRight>
          <NavItem onClick={ ::this.create }>
            New Task
          </NavItem>
          <NavItem onClick={ ::this.signOut }>
            Sign out
          </NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav pullRight>
          <NavItem onClick={ ::this.signUp }>
            Sign up
          </NavItem>
          <NavItem onClick={ ::this.signIn }>
            Sign in
          </NavItem>
        </Nav>
      );
    }
  }
}
