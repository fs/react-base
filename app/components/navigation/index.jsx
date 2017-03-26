import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { paths } from 'helpers/routes';

const Navigation = ({ loggedIn, currentUser, logout, signin, signup }) => {
  const logoutUser = () => {
    logout(currentUser);
  };

  const signinUser = () => {
    signin(currentUser);
  };

  const signupUser = () => {
    signup(currentUser);
  };

  const renderRightNav = () => {
    if (loggedIn) {
      return (
        <Nav pullRight>
          <NavItem>
            { currentUser.email }
          </NavItem>
          <NavItem onClick={ logoutUser }>
            Sign out
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem onClick={ signupUser }>
          Sign up
        </NavItem>
        <NavItem onClick={ signinUser }>
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
  currentUser: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default Navigation;
