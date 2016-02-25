import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import TodoActions from 'scripts/actions/todo';
import Menu from 'scripts/components/header/menu';

export default class HeaderLayout extends React.Component {
  create() {
    TodoActions.show()
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-Base
          </Navbar.Brand>
        </Navbar.Header>
        <Menu items={
          [
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' }
          ]
        }/>
        <Nav pullRight>
          <NavItem
            className="new-task-button"
            onClick={ this.create }
          >
            New Task
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
