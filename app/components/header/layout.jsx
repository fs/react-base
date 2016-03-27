import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import TodoActions from 'actions/todo';
import MenuLayout from 'components/menu/layout';

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
            React-base
          </Navbar.Brand>
        </Navbar.Header>
        <MenuLayout items={ links }/>
        <Nav pullRight>
          <NavItem className="new-task-button" onClick={ this.create }>
            New Task
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
