import Alt from 'scripts/alt';

export default Alt.createActions(class TodoActions {
  setName(name) {
    return name;
  }

  show() {
    return true;
  }

  hide() {
    return true;
  }

  reset() {
    return true;
  }

  create(newTodo) {
    return newTodo;
  }
});
