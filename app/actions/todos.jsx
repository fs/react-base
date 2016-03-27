import Alt from 'alt_flux';
import config from 'config';

export default Alt.createActions(class TodosActions {
  get(todos) {
    return (dispatch) => {
      dispatch();

      if (!todos.length) {
        fetch(`${config.apiPath}/todos`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(result => result.json())
        .then(result => this.set(result));
      }
    };
  }

  set(todos) {
    return todos;
  }

  update(todo) {
    return todo;
  }

  create(newTodo) {
    return newTodo;
  }
});
