import React from 'react';
import { Nav } from 'react-bootstrap';
import MenuItem from 'components/header/menu_item';

export default class Menu extends React.Component {
  renderList() {
    return this.props.items.map((item, index) => {
      return (
        <MenuItem key={ index } item={ item }/>
      );
    });
  }

  render() {
    return (
      <Nav>
        { ::this.renderList() }
      </Nav>
    );
  }
}
