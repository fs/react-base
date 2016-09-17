import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string
    })
  }

  render() {
    return (
      <li>
        <Link to={ this.props.item.route } activeClassName="active">
          { this.props.item.title }
        </Link>
      </li>
    );
  }
}
