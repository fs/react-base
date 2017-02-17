import todosSource from 'sources/todos'

export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const requestTodos = () => ({
  type: REQUEST_TODOS
})

export const receiveTodos = (todos) => ({
  todos,
  type: RECEIVE_TODOS
})

export const fetchTodos = () =>
  (dispatch) => {
    dispatch(requestTodos())
    todosSource.get().then((result) => dispatch(receiveTodos(result)))
  }
