import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import todosSource from 'sources/todos';

@createActions(Alt)
export default class TodosActions {
  get(todos) {
    return (dispatch) => {
      if (!todos.length) {
        todosSource.get().then(result => dispatch(result));
      } else {
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
}
