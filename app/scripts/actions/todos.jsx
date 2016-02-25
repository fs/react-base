import 'es6-promise';
import 'whatwg-fetch';
import Alt from 'scripts/alt';

export default Alt.createActions(class TodosActions {
  get(todos) {
    return (dispatch) => {
      dispatch();

      if (!todos.length) {
        fetch('api/todos', {
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
