import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import TodoActions from 'actions/todo';
import ModalStore from 'stores/abstract/modal';

@createStore(Alt)
export default class TodosStore extends ModalStore {
  constructor() {
    super();

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

  reset() {
    this.todo.name = '';
  }

  setName(name) {
    this.todo.name = name;
  }
}
