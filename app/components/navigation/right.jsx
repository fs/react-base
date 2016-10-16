import React, { Component, PropTypes } from 'react';
import { openModal } from 'actions/application';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import session from 'services/session';

class NavigationRight extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  create = () => {
    const { dispatch } = this.props;

    dispatch(openModal({ name: 'todo' }));
  }

  signIn = () => {
    const { dispatch } = this.props;

    dispatch(openModal({ name: 'signIn' }));
  }

  signUp = () => {
    const { dispatch } = this.props;

    dispatch(openModal({ name: 'signUp' }));
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

export default connect()(NavigationRight);
