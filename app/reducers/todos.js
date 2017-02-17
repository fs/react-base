import * as ActionTypes from 'actions/todos'
import * as TodoActionTypes from 'actions/todo'

const initialState = {
  isLoading: false,
  todos: []
}

export default function todos(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.REQUEST_TODOS:
    return {
      ...state,
      isLoading: true
    }
  case ActionTypes.RECEIVE_TODOS:
    return {
      ...state,
      isLoading: false,
      todos: action.todos
    }
  case TodoActionTypes.SUCCESS_TOGGLE:
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === action.todo.id ? action.todo : todo)
    }
  case TodoActionTypes.SUCCESS_DELETE:
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.todo.id)
    }
  case TodoActionTypes.SUCCESS_CREATE:
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  default:
    return state
  }
}
