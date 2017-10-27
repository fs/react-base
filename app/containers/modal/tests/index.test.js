import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { containerWithStore, containerProps } from 'helpers/store';
import Modal from 'containers/modal';

describe('Modal', () => {
  let state;
  let component;
  const renderComponent = () => shallow(containerWithStore(Modal, state));

  context('when it is todo modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: true,
          modalName: 'todo',
          modalOptions: {}
        }
      };
    });

    it('renders correctly', () => {
      component = renderComponent().find('TodoModal');
      console.log(toJson(renderComponent()));
      const modalProps = containerProps(component);

      expect(component).toBePresent();
      expect(modalProps).toEqual(['modal', 'closeModal']);
    });
  });

  context('when it is signin modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: false,
          modalName: 'signin',
          modalOptions: {}
        }
      };
    });

    it('renders correctly', () => {
      expect(componentToJSON()).toMatchSnapshot();
    });
  });

  context('when it is signup modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: false,
          modalName: 'signup',
          modalOptions: {}
        }
      };
    });

    it('renders correctly', () => {
      expect(componentToJSON()).toMatchSnapshot();
    });
  });
});
