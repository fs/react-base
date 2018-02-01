import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import i18n from 'services/i18n';
import paths from 'helpers/routes';
import styles from './styles';

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
            { i18n.t('header:signOut') }
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem onClick={ signupUser }>
          { i18n.t('header:signUp') }
        </NavItem>
        <NavItem onClick={ signinUser }>
          { i18n.t('header:signIn') }
        </NavItem>
      </Nav>
    );
  };

  return (
    <Navbar className={ styles.panel }>
      <Navbar.Header>
        <Navbar.Brand>
          { i18n.t('common:projectName') }
        </Navbar.Brand>
      </Navbar.Header>
      <ul className="nav navbar-nav">
        <li>
          <Link
            to={ paths.home() }
            exact
            activeClassName={ styles.linkActive }
          >
            { i18n.t('header:home') }
          </Link>
        </li>
        <li>
          <Link
            to={ paths.about() }
            activeClassName={ styles.linkActive }
          >
            { i18n.t('header:about') }
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
