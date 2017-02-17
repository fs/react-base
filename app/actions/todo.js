import todosSource from 'sources/todos'

export const SET_NAME = 'SET_NAME'
export const SUCCESS_CREATE = 'SUCCESS_CREATE'
export const SUCCESS_TOGGLE = 'SUCCESS_TOGGLE'
export const SUCCESS_DELETE = 'SUCCESS_DELETE'

export const setName = (name) => ({
  name,
  type: SET_NAME
})

export const successCreate = (todo) => ({
  todo,
  type: SUCCESS_CREATE
})

export const successToggle = (todo) => ({
  todo,
  type: SUCCESS_TOGGLE
})

export const successDelete = (todo) => ({
  todo,
  type: SUCCESS_DELETE
})

export const createTodo = (todo) =>
  (dispatch) =>
    todosSource.create(todo).then((result) => dispatch(successCreate(result)))

export const toggleTodo = (todo) =>
  (dispatch) =>
    todosSource.update(todo).then(() => dispatch(successToggle(todo)))

export const deleteTodo = (todo) =>
  (dispatch) =>
    todosSource.delete(todo).then(() => dispatch(successDelete(todo)))
