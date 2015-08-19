import React from 'react';
import Base from 'scripts/components/base/base';
import MenuItem from 'scripts/components/header/menu_item';

export default class Menu extends Base {
  constructor(...props) {
    super(...props);

    this.bindMethods('renderList');
  }

  renderList() {
    return this.props.items.map((item) => <MenuItem item={ item }/>);
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        { this.renderList() }
      </ul>
    )
  }
}
