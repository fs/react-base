import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to={ paths.signup() } activeClassName="active">
            Sign up
          </Link>
        </li>
        <li>
          <Link to={ paths.signin() } activeClassName="active">
            Sign in
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavigationRight;
