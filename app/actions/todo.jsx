import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import todosSource from 'sources/todos';

@createActions(Alt)
export default class TodoActions {
  setName(name) {
    return name;
  }

  show() {
    return true;
  }

  hide() {
    return true;
  }

  reset() {
    return true;
  }

  create(todo) {
    return (dispatch) => {
      todosSource.create(todo).then(result => dispatch(result));
    };
  }
}
