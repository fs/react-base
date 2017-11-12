import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import todosActions from 'actions/todos';
import { openModal } from 'actions/modal';
import Todo from 'components/todo';

class TodoContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <Todo openModal={ this.props.openModal } />;
  }
}

TodoContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosActions.fetchTodos()),
  openModal: () => dispatch(openModal({ name: 'todo' }))
});

export default connect(null, mapDispatchToProps)(TodoContainer);
