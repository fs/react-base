import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import { paths } from 'helpers/routes'

const Navigation = ({ isAuthenticated, currentUser, logoutUser }) => {
  const signOut = () => {
    logoutUser(currentUser)
  }

  const renderRightNav = () => {
    if (isAuthenticated) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="navbar-text">
            { currentUser.email }
          </li>
          <li>
            <a onClick={ signOut }>
              Sign out
            </a>
          </li>
        </ul>
      )
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
    )
  }

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
  )
}

Navigation.propTypes = {
  currentUser: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  logoutUser: PropTypes.func
}

export default Navigation
