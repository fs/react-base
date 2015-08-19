import $ from 'jquery';
import _ from 'underscore';
import Reflux from 'reflux';
import TodoActions from 'scripts/actions/todo'

export default Reflux.createStore({
  listenables: [TodoActions],

  onTodosGet(data) {
    this.collection = [];

    if (!this.collection.length) {
      $.ajax({
        type: 'GET',
        url: 'api/todos',
        dataType: 'json'
      }).then((data) => {
        this.collection = data;
        this.notify();
      });
    }
  },

  onTodoUpdate(content) {
    let found = _.find(this.collection, (item) => item.id === content.id);

    for (let name in found) {
      found[name] = content[name];
    };

    this.notify();
  },

  onTodoCreate(content) {
    content.id = _.max(this.collection, (item) => item.id).id + 1;
    this.collection.push(content);
    this.notify();
  },

  notify() {
    this.trigger(this.collection);
  }
});
