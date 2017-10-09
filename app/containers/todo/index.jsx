import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import todosActions from 'actions/todos';
import modalActions from 'actions/modal';
import Todo from 'components/todo';

class TodoContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <Todo { ...this.props } />;
  }
}

TodoContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state.todos,
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosActions.fetchTodos()),
  updateTodo: todo => dispatch(todosActions.updateTodo(todo)),
  deleteTodo: todo => dispatch(todosActions.deleteTodo(todo)),
  openModal: () => dispatch(modalActions.openModal({ name: 'todo' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
