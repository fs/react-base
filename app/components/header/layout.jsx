import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import TodoActions from 'actions/todo';
import Menu from 'components/header/menu';

export default class HeaderLayout extends React.Component {
  create() {
    TodoActions.show();
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
            React-Base
          </Navbar.Brand>
        </Navbar.Header>
        <Menu items={ links }/>
        <Nav pullRight>
          <NavItem className="new-task-button" onClick={ this.create }>
            New Task
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
