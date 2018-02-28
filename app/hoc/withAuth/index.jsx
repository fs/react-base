import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { paths } from 'helpers/routes';

export default function withAuth(WrappedComponent) {
  class EnhancedComponent extends Component {
    static propTypes = {
      loggedIn: PropTypes.bool.isRequired
    };

    render() {
      if (this.props.loggedIn) {
        return (
          <WrappedComponent { ...this.props } />
        );
      }

      return <Redirect to={ paths.home() } />;
    }
  }

  return connect(state => state.session)(EnhancedComponent);
}
