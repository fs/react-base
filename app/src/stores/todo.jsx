import Alt from 'alt_flux';
import TodoActions from 'actions/todo';

export default Alt.createStore(class TodoStore {
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
}, 'TodoStore');
