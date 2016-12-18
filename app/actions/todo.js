import todosSource from 'sources/todos';

export const SET_NAME = 'SET_NAME';

export const setValue = (name) => ({
  type: SET_NAME,
  name
});

export const create = (todo) => {
  return (dispatch) => {
    return todosSource.create(todo).then((result) => dispatch(result));
  }
}
