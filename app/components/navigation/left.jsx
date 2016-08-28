import React from 'react';
import { Nav } from 'react-bootstrap';
import NavigationItem from 'components/navigation';

export default class NavigationLeft extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        route: React.PropTypes.string,
        title: React.PropTypes.string
      })
    )
  }

  renderList = () => {
    return this.props.items.map((item, index) => {
      return (
        <NavigationItem key={ index } item={ item }/>
      );
    });
  }

  render() {
    return (
      <Nav>
        { this.renderList() }
      </Nav>
    );
  }
}
