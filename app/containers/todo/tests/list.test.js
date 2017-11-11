import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import TodoListContainer from '../list';

describe('TodoListContainer', () => {
  let state;
  let props;
  let component;
  const renderComponent = () => shallow(containerWithStore(TodoListContainer, state, props));

  beforeEach(() => {
    state = {
      todos: {
        isLoading: false,
        todos: [
          { id: 1, isComplete: true, name: 'Something to do 1' },
          { id: 2, isComplete: false, name: 'Something to do 2' },
          { id: 3, isComplete: false, name: 'Something to do 3' }
        ]
      }
    };
    props = {
      deleteTodo: () => {},
      updateTodo: () => {},
      isComplete: true
    };
  });

  it('renders TodoList component', () => {
    component = renderComponent().find('TodoListContainer').shallow();
    const todoListProps = containerProps(component);

    expect(component).toBePresent();
    expect(todoListProps).toEqual(['todos', 'deleteTodo', 'updateTodo']);
  });

  it('filters todos by isComplete', () => {
    component = renderComponent().find('TodoListContainer').shallow();
    const todos = component.prop('todos');

    expect(todos).toHaveLength(1);
    expect(todos).toContainEqual({ id: 1, isComplete: true, name: 'Something to do 1' });
  });
});
