import _ from 'underscore';
import TodoActions from 'scripts/actions/todo';
import TodosActions from 'scripts/actions/todos';
import Alt from 'scripts/alt';

export default Alt.createStore(class TodoStore {
  constructor() {
    this.todo = {
      name: '',
      isComplete: false
    };

    this.bindListeners({
      setName: TodoActions.SET_NAME,
      reset: TodoActions.RESET,
      create: TodoActions.CREATE
    });
  }

  setName(name) {
    this.todo.name = name;
  }

  reset() {
    this.todo.name = '';
  }

  create() {
    TodosActions.create(this.todo);
  }
}, 'TodoStore');
