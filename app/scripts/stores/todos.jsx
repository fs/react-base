import TodoActions from 'scripts/actions/todo';
import TodosActions from 'scripts/actions/todos';
import Alt from 'scripts/alt';

const max = (array, callback) => {
  return Math.max.apply(Math, array.map(callback));
}

export default Alt.createStore(class TodosStore {
  constructor() {
    this.todos = [];

    this.bindListeners({
      set: TodosActions.SET,
      update: TodosActions.UPDATE,
      create: TodoActions.CREATE
    });
  }

  set(todos) {
    this.todos = todos;
  }

  update(todo) {
    const found = this.todos.find(item => item.id === todo.id);

    for (let name in found) {
      found[name] = todo[name];
    };
  }

  create(todo) {
    let found = max(this.todos, item => item.id);

    todo = Object.assign({ id: ++found }, todo);
    this.todos.push(todo);
  }
}, 'TodosStore');
