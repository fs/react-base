import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router'

export default class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <Link ref="menuItem" to={ this.props.item.route } activeClassName="active">
          { this.props.item.title }
        </Link>
      </li>
    )
  }
}
