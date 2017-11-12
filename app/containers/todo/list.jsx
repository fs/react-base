import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import todosActions from 'actions/todos';
import TodoList from 'components/todo/list';

const TodoListContainer = ({ isComplete, todos, updateTodo, deleteTodo }) => (
  <TodoList
    todos={ todos.filter(todo => todo.isComplete === isComplete) }
    deleteTodo={ deleteTodo }
    updateTodo={ updateTodo }
  />
);

TodoListContainer.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state.todos
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => dispatch(todosActions.deleteTodo(todo)),
  updateTodo: todo => dispatch(todosActions.updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
