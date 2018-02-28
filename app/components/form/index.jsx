import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  getChildContext = () => {
    const { errors } = this.props;

    return { errors };
  };

  render() {
    const { children, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        { children }
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

Form.childContextTypes = {
  errors: PropTypes.object,
};

Form.defaultProps = {
  errors: {},
};
