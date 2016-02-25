import $ from 'jquery';
import Alt from 'scripts/alt';

export default Alt.createActions(class TodosActions {
  get(todos) {
    return (dispatch) => {
      dispatch();

      if (!todos.length) {
        $.ajax({
          type: 'GET',
          url: 'api/todos',
          dataType: 'json'
        })
        .then(data => this.set(data));
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
