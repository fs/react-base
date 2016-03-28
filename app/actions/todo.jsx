import Alt from 'alt_flux';
import todosSource from 'sources/todos';

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

  create(todo) {
    return (dispatch) => {
      todosSource.create(todo).then(result => dispatch(result));
    };
  }
});
