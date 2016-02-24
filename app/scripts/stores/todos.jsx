import _ from 'underscore';
import TodosActions from 'scripts/actions/todos';
import Alt from 'scripts/alt';

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
    let found = _.find(this.todos, (item) => item.id === todo.id);

    for (let name in found) {
      found[name] = todo[name];
    };
  }

  create(todo) {
    todo.id = _.max(this.todos, (item) => item.id).id + 1;
    this.todos.push(todo);
  }
}, 'TodosStore');
