import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import { mixin } from 'core-decorators';
import { ModalStoreMixin } from 'mixins/modal/store';
import TodoActions from 'actions/todo';

@createStore(Alt)
@mixin(ModalStoreMixin)
export default class TodosStore {
  defaultProps = {
    name: '',
    isComplete: false
  }

  constructor() {
    this.todo = Object.assign({}, this.defaultProps);

    this.bindListeners({
      show: TodoActions.SHOW,
      hide: TodoActions.HIDE,
      setName: TodoActions.SET_NAME,
      reset: TodoActions.RESET
    });
  }

  reset() {
    this.todo = Object.assign({}, this.defaultProps);
  }

  setName(name) {
    this.todo.name = name;
  }
}
