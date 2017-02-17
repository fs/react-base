import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { paths } from 'helpers/routes';
import { Link } from 'react-router';
import { logoutUser } from 'actions/session';

export default class Navigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string
    })
  }

  signOut = () => {
    this.props.dispatch(logoutUser(this.props.currentUser));
  }

  renderRightNav = () => {
    if (this.props.isAuthenticated) {
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

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-base
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav navbar-nav">
          <li>
            <Link to={ paths.home() } activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to={ paths.about() } activeClassName="active">
              About
            </Link>
          </li>
        </ul>
        { this.renderRightNav() }
      </Navbar>
    );
  }
}
