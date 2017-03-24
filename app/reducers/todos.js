import { handleActions } from 'redux-actions'
import actionTypes from 'constants/todos'

const {
  LOAD_TODOS,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} = actionTypes

const initialState = {
  isLoading: false,
  todos: []
}

export default handleActions({
  [LOAD_TODOS]: (state) => ({
    ...state,
    isLoading: true
  }),
  [SET_TODOS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    todos: payload
  }),
  [ADD_TODO]: (state, { payload }) => {
    const newTodo = { ...payload, isComplete: false };

    return {
      ...state,
      todos: [...state.todos, newTodo]
    };
  },
  [TOGGLE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === payload.id ? payload : todo)
  }),
  [REMOVE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id)
  })
}, initialState)
