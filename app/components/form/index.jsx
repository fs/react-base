import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    errors: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  }

  static childContextTypes = {
    errors: PropTypes.object
  }

  static defaultProps = {
    errors: {}
  }

  getChildContext = () => {
    const { errors } = this.props;

    return { errors };
  }

  render() {
    const { children, onSubmit } = this.props;

    return (
      <form onSubmit={ onSubmit }>
        { children }
      </form>
    );
  }
}
