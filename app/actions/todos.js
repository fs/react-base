import { createActions } from 'redux-actions';
import todosSource from 'sources/todos';
import actionTypes from 'constants/todos';

const {
  LOAD_TODOS,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} = actionTypes;

const actions = createActions(
  LOAD_TODOS,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
);

const fetchTodos = () =>
  dispatch => {
    dispatch(actions.loadTodos());

    return todosSource.get().then(result => {
      dispatch(actions.setTodos(result));
    });
  };

const createTodo = todo =>
  dispatch =>
    todosSource.create({ ...todo, isComplete: false }).then(result => {
      dispatch(actions.addTodo(result));
    });

const updateTodo = todo =>
  dispatch => {
    dispatch(actions.toggleTodo(todo));

    return todosSource.update(todo);
  };

const deleteTodo = todo =>
  dispatch => {
    dispatch(actions.removeTodo(todo));

    return todosSource.delete(todo);
  };

export default { ...actions, fetchTodos, createTodo, updateTodo, deleteTodo };
