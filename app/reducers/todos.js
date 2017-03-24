import { handleActions } from 'redux-actions'
import actionTypes from 'constants/todos'

const { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, REQUEST_TODOS, RECEIVE_TODOS } = actionTypes

const initialState = {
  isLoading: false,
  todos: []
}

export default handleActions({
  [CREATE_TODO]: (state, { payload }) => {
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
  [DELETE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id)
  }),
  [REQUEST_TODOS]: (state) => ({
    ...state,
    isLoading: true
  }),
  [RECEIVE_TODOS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    todos: payload
  })
}, initialState)
