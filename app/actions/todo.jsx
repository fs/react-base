import Alt from 'alt_flux';
import config from 'config';

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
    return (dispatch) => {
      dispatch();

      fetch(`${config.apiPath}/todos`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      .then(result => this.set(newTodo));
    };
  }

  set(newTodo) {
    return newTodo;
  }
});
