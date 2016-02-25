import Alt from 'scripts/alt';
import TodoActions from 'scripts/actions/todo';

export default Alt.createStore(class TodoStore {
  constructor() {
    this.todo = {
      name: '',
      isComplete: false
    };

    this.bindListeners({
      setName: TodoActions.SET_NAME,
      reset: TodoActions.RESET
    });
  }

  setName(name) {
    this.todo.name = name;
  }

  reset() {
    this.todo.name = '';
  }
}, 'TodoStore');
