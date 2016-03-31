import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import SessionActions from 'actions/session';
import SigninActions from 'actions/signin';
import TodoActions from 'actions/todo';
import MenuLayout from 'components/menu/layout';
import session from 'services/session';

export default class HeaderLayout extends React.Component {
  state = session.store().getState()

  constructor() {
    super();

    this.changeState = ::this.changeState;
  }

  componentDidMount() {
    session.store().listen(this.changeState);
  }

  componentWillUnmount() {
    session.store().unlisten(this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  create() {
    TodoActions.show();
  }

  signIn() {
    SigninActions.show();
  }

  signOut() {
    SessionActions.destroy(session.currentUser());
  }

  renderRightNav() {
    if (session.loggedIn()) {
      return (
        <Nav pullRight>
          <NavItem onClick={ ::this.create }>
            New Task
          </NavItem>
          <NavItem onClick={ ::this.signOut }>
            Sign out
          </NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav pullRight>
          <NavItem onClick={ ::this.signIn }>
            Sign in
          </NavItem>
        </Nav>
      );
    }
  }

  render() {
    const links = [
      { title: 'Home', route: '/' },
      { title: 'About', route: '/about' }
    ];

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-base
          </Navbar.Brand>
        </Navbar.Header>
        <MenuLayout items={ links }/>
        { ::this.renderRightNav() }
      </Navbar>
    );
  }
}
