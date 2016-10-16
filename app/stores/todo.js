import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import TodoActions from 'actions/todo';

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
      setName: TodoActions.SET_NAME
    });
  }

  setName(name) {
    this.todo.name = name;
  }

  reset() {
    this.todo = Object.assign({}, this.defaultProps);
  }
}
