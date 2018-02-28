import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { paths } from 'helpers/routes';

export default function withAuth(WrappedComponent) {
  const EnhancedComponent = (props) => {
    if (props.loggedIn) {
      return (
        <WrappedComponent {...props} />
      );
    }

    return <Redirect to={paths.home()} />;
  };

  EnhancedComponent.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  };

  return connect(state => state.session)(EnhancedComponent);
}
