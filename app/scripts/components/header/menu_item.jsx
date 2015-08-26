import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import RouterActions from 'scripts/actions/router';

const { Link, Route } = Router;

export default class MenuItem extends React.Component {
  state = {
    active: ''
  }

  componentWillMount() {
    RouterActions.routeChange.listen(() => {
      this.setActiveTab();
    });
  }

  setActiveTab() {
    this.setState({ active: '' });
    const $menuItem = $(React.findDOMNode(this.refs.menuItem));

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
