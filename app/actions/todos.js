import { createActions } from 'redux-actions'
import todosSource from 'sources/todos'
import actionTypes from 'constants/todos'

const { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, REQUEST_TODOS, RECEIVE_TODOS } = actionTypes

const actions = createActions(
  CREATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS
)

const fetchTodos = () =>
  (dispatch) => {
    dispatch(actions.requestTodos())
    todosSource.get().then(result => dispatch(actions.receiveTodos(result)))
  }

const createTodo = (todo) =>
  (dispatch) =>
    todosSource.create(todo).then(result => dispatch(actions.createTodo(result)));

const toggleTodo = (todo) =>
  (dispatch) =>
    todosSource.update(todo).then(() => dispatch(actions.toggleTodo(todo)))

const deleteTodo = (todo) =>
  (dispatch) =>
    todosSource.delete(todo).then(() => dispatch(actions.deleteTodo(todo)))

export default { ...actions, fetchTodos, createTodo, toggleTodo, deleteTodo }
