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

  updateTodo(todo) {
    return (dispatch) => {
      dispatch();

      fetch(`${config.apiPath}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });

      this.update(todo);
    };
  }

  deleteTodo(todo) {
    return (dispatch) => {
      dispatch();

      fetch(`${config.apiPath}/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      this.delete(todo);
    };
  }

  update(todo) {
    return todo;
  }

  delete(todo) {
    return todo;
  }

  create(newTodo) {
    return newTodo;
  }
});
