import React from 'react';
import MenuItem from 'scripts/components/header/menu_item';

export default class Menu extends React.Component {
  renderList() {
    return this.props.items.map((item) => <MenuItem item={ item }/>);
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        { ::this.renderList() }
      </ul>
    )
  }
}
