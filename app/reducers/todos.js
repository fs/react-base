import { handleActions } from 'redux-actions'
import actionTypes from 'constants/todos'
import todoActionTypes from 'constants/todo'

const { REQUEST_TODOS, RECEIVE_TODOS } = actionTypes
const { SUCCESS_CREATE, SUCCESS_TOGGLE, SUCCESS_DELETE } = todoActionTypes

const initialState = {
  isLoading: false,
  todos: []
}

export default handleActions({
  [REQUEST_TODOS]: (state) => ({
    ...state,
    isLoading: true
  }),
  [RECEIVE_TODOS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    todos: payload
  }),
  [SUCCESS_CREATE]: (state, { payload }) => ({
    ...state,
    todos: [...state.todos, payload]
  }),
  [SUCCESS_TOGGLE]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === payload.id ? payload : todo)
  }),
  [SUCCESS_DELETE]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id)
  })
}, initialState)
