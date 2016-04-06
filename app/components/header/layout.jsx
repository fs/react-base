import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavigationLeft from 'components/navigation/left';
import NavigationRight from 'components/navigation/right';

export default class HeaderLayout extends React.Component {
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
        <NavigationLeft items={ links }/>
        <NavigationRight/>
      </Navbar>
    );
  }
}
