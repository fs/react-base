import Alt from 'alt_flux';
import todosSource from 'sources/todos';

export default Alt.createActions(class TodosActions {
  get(todos) {
    return (dispatch) => {
      if (!todos.length) {
        todosSource.get().then(result => dispatch(result));
      }
      else {
        dispatch(todos);
      }
    };
  }

  update(todo) {
    return (dispatch) => {
      todosSource.update(todo);
      dispatch(todo);
    };
  }

  delete(todo) {
    return (dispatch) => {
      todosSource.delete(todo);
      dispatch(todo);
    };
  }
});
