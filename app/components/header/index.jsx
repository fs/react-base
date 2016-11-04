import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import NavigationLeft from 'components/navigation/left';
import NavigationRight from 'components/navigation/right';
import { paths } from 'helpers/routes';

export default class Header extends Component {
  render() {
    const links = [
      { title: 'Home', route: paths.home() },
      { title: 'About', route: paths.about() },
    ];

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-base
          </Navbar.Brand>
        </Navbar.Header>
        <NavigationLeft items={links} />
        <NavigationRight />
      </Navbar>
    );
  }
}
