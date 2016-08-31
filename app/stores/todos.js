import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import { maxBy } from 'lodash';
import TodoActions from 'actions/todo';
import TodosActions from 'actions/todos';

@createStore(Alt)
export default class TodosStore {
  static displayName = 'TodosStore'

  constructor() {
    this.todos = [];

    this.bindListeners({
      create: TodoActions.CREATE,
      get: TodosActions.GET,
      update: TodosActions.UPDATE,
      delete: TodosActions.DELETE
    });
  }

  get(todos) {
    this.todos = todos;
  }

  update(todo) {
    const found = this.todos.find(item => item.id === todo.id);

    for (const name in found) {
      found[name] = todo[name];
    };
  }

  create(todo) {
    let found = maxBy(this.todos, item => item.id);

    todo = Object.assign({ id: ++found }, todo);
    this.todos.push(todo);
  }

  delete(todo) {
    this.todos.splice(this.todos.findIndex(item => item === todo.id), 1);
  }
}
