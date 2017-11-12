import { createAction } from 'redux-actions';
import todosSource from 'sources/todos';

export const LOAD_TODOS = 'LOAD_TODOS';
export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const loadTodos = createAction(LOAD_TODOS);
export const setTodos = createAction(SET_TODOS);
export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const removeTodo = createAction(REMOVE_TODO);

export const fetchTodos = () =>
  dispatch => {
    dispatch(loadTodos());

    return todosSource.get().then(result => {
      dispatch(setTodos(result));
    });
  };

export const createTodo = todo =>
  dispatch =>
    todosSource.create({ ...todo, isComplete: false }).then(result => {
      dispatch(addTodo(result));
    });

export const updateTodo = todo =>
  dispatch => {
    dispatch(toggleTodo(todo));

    return todosSource.update(todo);
  };

export const deleteTodo = todo =>
  dispatch => {
    dispatch(removeTodo(todo));

    return todosSource.delete(todo);
  };
