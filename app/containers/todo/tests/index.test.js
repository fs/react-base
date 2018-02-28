import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import TodoContainer from '../';

describe('TodoContainer', () => {
  let props;
  let component;
  const renderComponent = () => shallow(containerWithStore(TodoContainer, {}, props));

  beforeEach(() => {
    props = {
      fetchTodos: () => {},
      openModal: () => {},
    };
  });

  it('renders Todo component', () => {
    component = renderComponent().find('TodoContainer').shallow();
    const todoProps = containerProps(component);

    expect(component).toBePresent();
    expect(todoProps).toEqual(['openModal']);
  });
});
