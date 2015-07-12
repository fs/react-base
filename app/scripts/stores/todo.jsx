import $ from 'jquery';
import _ from 'underscore';
import dispatcher from 'scripts/dispatchers/dispatcher';
import emitter from 'scripts/emitters/emitter';

function notify() {
  emitter.emit('todos-changed', this.collection);
};

class TodoStore {
  constructor() {
    this.collection = [];

    $.ajax({
      type: 'GET',
      url: 'api/todos',
      dataType: 'json',
    }).then((data) => {
      this.collection = data;
      notify.call(this);
    });

    dispatcher.register((payload) => {
      switch (payload.type) {
        case 'all-todos':
          this.read();
          break;
        case 'update-todo':
          this.update(payload.content);
          break;
        case 'create-todo':
          this.create(payload.content);
          break;
      }
    });
  }

  read() {
    notify.call(this);
  }

  update(content) {
    let found = _.find(this.collection, function(x) {
      return x.id === content.id;
    });

    for (let name in found) {
      found[name] = content[name];
    };

    notify.call(this);
  }

  create(content) {
    content.id = _.max(this.collection, (x) => x.id).id + 1;
    this.collection.push(content);
    notify.call(this);
  }
}

export default new TodoStore();
