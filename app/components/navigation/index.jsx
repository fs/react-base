import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { translate } from 'react-i18next';
import { paths } from 'helpers/routes';
import styles from './styles';

const Navigation = ({ loggedIn, currentUser, logout, signin, signup, t }) => {
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
            { t('header:signOut') }
          </NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight>
        <NavItem onClick={ signupUser }>
          { t('header:signUp') }
        </NavItem>
        <NavItem onClick={ signinUser }>
          { t('header:signIn') }
        </NavItem>
      </Nav>
    );
  };

  return (
    <Navbar className={ styles.panel }>
      <Navbar.Header>
        <Navbar.Brand>
          { t('common:projectName') }
        </Navbar.Brand>
      </Navbar.Header>
      <ul className="nav navbar-nav">
        <li>
          <Link
            to={ paths.home() }
            activeClassName={ styles.linkActive }
          >
            { t('header:home') }
          </Link>
        </li>
        <li>
          <Link
            to={ paths.about() }
            activeClassName={ styles.linkActive }
          >
            { t('header:about') }
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
  signup: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default translate()(Navigation);
