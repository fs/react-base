import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Nav, NavItem } from 'react-bootstrap';
import ApplicationActions from 'actions/application';
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
    ApplicationActions.openModal({ name: 'todo' });
  }

  signIn() {
    ApplicationActions.openModal({ name: 'signIn' });
  }

  signUp() {
    ApplicationActions.openModal({ name: 'signUp' });
  }

  signOut() {
    session.delete();
  }

  render() {
    if (session.loggedIn()) {
      return (
        <Nav pullRight>
          <NavItem onClick={ this.create }>
            New Task
          </NavItem>
          <NavItem onClick={ this.signOut }>
            Sign out
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem onClick={ this.signUp }>
          Sign up
        </NavItem>
        <NavItem onClick={ this.signIn }>
          Sign in
        </NavItem>
      </Nav>
    );
  }
}
