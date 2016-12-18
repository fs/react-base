import React, { Component, PropTypes } from 'react';
import { openModal } from 'actions/application';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { paths } from 'helpers/routes';
import session from 'services/session';

class NavigationRight extends Component {
  signOut() {
    session.delete();
  }

  render() {
    if (session.loggedIn()) {
      return (
        <Nav pullRight>
          <NavItem onClick={ this.signOut }>
            Sign out
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem href={ paths.signup() }>
          Sign up
        </NavItem>
        <NavItem href={ paths.signin() }>
          Sign in
        </NavItem>
      </Nav>
    );
  }
}

export default NavigationRight;
