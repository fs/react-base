import React, { Component, PropTypes } from 'react';
import { Nav } from 'react-bootstrap';
import { paths } from 'helpers/routes';
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
      <ul className="nav navbar-nav">
        <li>
          <Link to={ paths.home() } activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to={ paths.about() } activeClassName="active">
            About
          </Link>
        </li>
      </ul>
    );
  }
}
