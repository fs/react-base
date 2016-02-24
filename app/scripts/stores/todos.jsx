import TodosActions from 'scripts/actions/todos';
import Alt from 'scripts/alt';

function max(array, callback) {
  return Math.max.apply(Math, array.map(callback));
}

export default Alt.createStore(class TodosStore {
  constructor() {
    this.todos = [];

    this.bindListeners({
      set: TodosActions.SET,
      update: TodosActions.UPDATE,
      create: TodosActions.CREATE
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
    const found = max(this.todos, item => item.id);

    todo.id = ++found.id;
    this.todos.push(todo);
  }
}, 'TodosStore');
