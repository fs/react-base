import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { paths } from 'helpers/routes';

const Navigation = ({ loggedIn, currentUser, logout, signin, signup }) => {
  const renderRightNav = () => {
    if (loggedIn) {
      return (
        <Nav pullRight>
          <NavItem>
            { currentUser.email }
          </NavItem>
          <NavItem onClick={ () => logout(currentUser) }>
            Sign out
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem onClick={ () => signup(currentUser) }>
          Sign up
        </NavItem>
        <NavItem onClick={ () => signin(currentUser) }>
          Sign in
        </NavItem>
      </Nav>
    );
  };

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
      { renderRightNav() }
    </Navbar>
  );
};

Navigation.propTypes = {
  currentUser: PropTypes.object,
  loggedIn: PropTypes.bool,
  logoutUser: PropTypes.func
};

export default Navigation;
