import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import RouterActions from 'scripts/actions/router';
import Base from 'scripts/components/base/base';

let { Link, Route } = Router;

export default class MenuItem extends Base {
  constructor(...props) {
    super(...props);

    this.state = {
      active: ''
    }
  }

  componentDidMount() {
    RouterActions.routeChange.listen(() => {
      _.defer(() => { this.setActiveTab() });
    });
  }

  setActiveTab() {
    this.setState({ active: '' });
    let $menuItem = $(React.findDOMNode(this.refs.menuItem));

    if ($menuItem.hasClass('active')) {
      this.setState({ active: 'active' });
    }
  }

  render() {
    return (
      <li className={ this.state.active }>
        <Link ref="menuItem" to={ this.props.item.route } activeClassName="active">
          { this.props.item.title }
        </Link>
      </li>
    )
  }
}
