import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import TodoActions from 'actions/todo';

@createStore(Alt)
export default class TodosStore {
  constructor() {
    this.showModal = false;
    this.todo = {
      name: '',
      isComplete: false
    };

    this.bindListeners({
      show: TodoActions.SHOW,
      hide: TodoActions.HIDE,
      setName: TodoActions.SET_NAME,
      reset: TodoActions.RESET
    });
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }

  setName(name) {
    this.todo.name = name;
  }

  reset() {
    this.todo.name = '';
  }
}
