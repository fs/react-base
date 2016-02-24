import Alt from 'scripts/alt';

export default Alt.createActions(class TodoActions {
  setName(name) {
    return name;
  }

  reset() {
    return true;
  }

  create() {
    return true;
  }
});
