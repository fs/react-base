import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import i18n from 'services/i18n';
import paths from 'helpers/routes';
import styles from './styles';

const NavItemLink = ({ to, exact, ...props }) => (
  <Route path={ to } exact={ exact }>
    {({ match }) => (
      <NavItem
        to={ to }
        href={ to }
        exact={ exact }
        { ...props }
        componentClass={ Link }
        active={ !!match }
      />
    )}
  </Route>
);

NavItemLink.propTypes = Link.propTypes;

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
          <NavItemLink to={ paths.profile() }>
            { currentUser.email }
          </NavItemLink>
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
      <Nav>
        <NavItemLink to={ paths.home() } exact>
          { i18n.t('header:home') }
        </NavItemLink>
        <NavItemLink to={ paths.about() }>
          { i18n.t('header:about') }
        </NavItemLink>
      </Nav>
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
