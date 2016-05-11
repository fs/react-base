import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';
import { mixin } from 'core-decorators';
import { ModalActionsMixin } from 'mixins/modal/actions';
import todosSource from 'sources/todos';

@createActions(Alt)
@mixin(ModalActionsMixin)
export default class TodoActions {
  setName(name) {
    return name;
  }

  create(todo) {
    return (dispatch) => {
      todosSource.create(todo).then(result => dispatch(result));
    };
  }
}
