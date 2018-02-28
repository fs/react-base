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
  async (dispatch) => {
    dispatch(loadTodos());

    const result = await todosSource.get();

    dispatch(setTodos(result));
  };

export const createTodo = todo =>
  async (dispatch) => {
    const result = await todosSource.create({ ...todo, isComplete: false });

    dispatch(addTodo(result));
  };

export const updateTodo = todo =>
  (dispatch) => {
    dispatch(toggleTodo(todo));
    todosSource.update(todo);
  };

export const deleteTodo = todo =>
  (dispatch) => {
    dispatch(removeTodo(todo));
    todosSource.delete(todo);
  };
