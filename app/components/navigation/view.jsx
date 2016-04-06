import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
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
