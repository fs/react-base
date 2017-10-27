import { shallow } from 'enzyme';
import { containerWithStore, containerProps } from 'helpers/store';
import TodoModal from '../';

describe('TodoModal', () => {
  let props;
  let component;
  const renderComponent = () => shallow(containerWithStore(TodoModal, {}, props));

  beforeEach(() => {
    props = {
      closeModal: () => {},
      isOpen: true
    };
  });

  it('renders TodoModal component', () => {
    component = renderComponent().find('TodoModal');
    const todoModalProps = containerProps(component);

    expect(component).toBePresent();
    expect(todoModalProps).toEqual(['closeModal', 'isOpen', 'createTodo']);
  });
});
