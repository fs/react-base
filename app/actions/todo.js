import { createActions } from 'redux-actions'
import todosSource from 'sources/todos'
import actionTypes from 'constants/todo'

const { SET_NAME, SUCCESS_CREATE, SUCCESS_TOGGLE, SUCCESS_DELETE } = actionTypes

const actions = createActions(
  SET_NAME,
  SUCCESS_CREATE,
  SUCCESS_TOGGLE,
  SUCCESS_DELETE
)

const createTodo = (todo) =>
  (dispatch) =>
    todosSource.create(todo).then(result => dispatch(actions.successCreate(result)))

const toggleTodo = (todo) =>
  (dispatch) =>
    todosSource.update(todo).then(() => dispatch(actions.successToggle(todo)))

const deleteTodo = (todo) =>
  (dispatch) =>
    todosSource.delete(todo).then(() => dispatch(actions.successDelete(todo)))

export default { ...actions, createTodo, toggleTodo, deleteTodo }
