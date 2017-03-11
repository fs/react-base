import { createActions } from 'redux-actions'
import todosSource from 'sources/todos'
import actionTypes from 'constants/todos'

const { REQUEST_TODOS, RECEIVE_TODOS } = actionTypes

const actions = createActions(
  REQUEST_TODOS,
  RECEIVE_TODOS
)

const fetchTodos = () =>
  (dispatch) => {
    dispatch(actions.requestTodos())
    todosSource.get().then((result) => dispatch(actions.receiveTodos(result)))
  }

export default { ...actions, fetchTodos }
