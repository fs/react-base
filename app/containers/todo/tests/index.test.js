import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import Todo from '../';

describe('Todo', () => {
  let props;
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(Todo, state, props));

  beforeEach(() => {
    state = {
      todos: {
        isLoading: false,
        todos: []
      },
      todo: {}
    };
    props = {
      fetchTodos: () => {},
      updateTodo: () => {},
      deleteTodo: () => {},
      openModal: () => {},
      isComplete: true
    };
  });

  it('renders Todo component', () => {
    component = renderComponent().find('TodoContainer').shallow();
    const todoProps = containerProps(component);

    expect(component).toBePresent();
    expect(todoProps).toEqual([
      'fetchTodos',
      'updateTodo',
      'deleteTodo',
      'openModal',
      'isComplete',
      'isLoading',
      'todos',
      'todo'
    ]);
  });
});
