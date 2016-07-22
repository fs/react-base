import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import TodoActions from 'actions/todo';
import ApplicationActions from 'actions/application';

@createStore(Alt)
export default class TodoStore {
  static displayName = 'TodoStore'

  defaultProps = {
    name: '',
    isComplete: false
  }

  constructor() {
    this.todo = Object.assign({}, this.defaultProps);

    this.bindListeners({
      setName: TodoActions.SET_NAME,
      reset: ApplicationActions.CLOSE_MODAL
    });
  }

  setName(name) {
    this.todo.name = name;
  }

  reset() {
    this.todo = Object.assign({}, this.defaultProps);
  }
}
