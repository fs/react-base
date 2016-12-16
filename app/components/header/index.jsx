import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { paths } from 'helpers/routes';
import Navigation from 'components/navigation';
import NavigationRight from 'components/navigation/right';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React-base
          </Navbar.Brand>
        </Navbar.Header>
        <Navigation/>
        <NavigationRight/>
      </Navbar>
    );
  }
}
