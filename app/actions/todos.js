import todosSource from 'sources/todos';

export const get = () => {
  return dispatch => {
    return todosSource.get().then(result => dispatch(result));
  };
}

export const update = (todo) => {
  return (dispatch) => {
    todosSource.update(todo);
    dispatch(todo);
  }
}

export const deleteTodo = (todo) => {
  return (dispatch) => {
    todosSource.delete(todo);
    dispatch(todo);
  }
}
