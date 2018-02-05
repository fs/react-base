import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import paths from 'helpers/routes';

export default function withAuth(WrappedComponent) {
  class EnhancedComponent extends Component {
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
      loggedIn: PropTypes.bool.isRequired
    };

    componentDidMount() {
      if (!this.props.loggedIn) {
        this.props.history.push(paths.home());
      }
    }

    render() {
      if (this.props.loggedIn) {
        return (
          <WrappedComponent { ...this.props } />
        );
      }

      return null;
    }
  }

  return withRouter(connect(state => state.session)(EnhancedComponent));
}
