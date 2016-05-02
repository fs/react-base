import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import ModalActions from 'actions/abstract/modal';
import todosSource from 'sources/todos';

@createActions(Alt)
export default class TodoActions extends ModalActions {
  setName(name) {
    return name;
  }

  create(todo) {
    return (dispatch) => {
      todosSource.create(todo).then(result => dispatch(result));
    };
  }
}
