import React, { Component, PropTypes } from 'react';
import { Nav } from 'react-bootstrap';
import NavigationItem from 'components/navigation';

export default class NavigationLeft extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        route: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }

  renderList = () =>
     this.props.items.map((item, index) =>
       (
         <NavigationItem key={index} item={item} />
      )
    )


  render() {
    return (
      <Nav>
        { this.renderList() }
      </Nav>
    );
  }
}
