import React from 'react';
import { Nav } from 'react-bootstrap';
import NavigationItem from 'components/navigation/view';

export default class NavigationLeft extends React.Component {
  renderList() {
    return this.props.items.map((item, index) => {
      return (
        <NavigationItem key={ index } item={ item }/>
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
