import { shallow } from 'enzyme';
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
          modalOptions: {},
        },
      };
    });

    it('renders TodoModal component', () => {
      component = renderComponent().find('ModalContainer').shallow();
      const modalProps = containerProps(component);

      expect(component).toBePresent();
      expect(component.name()).toEqual('Connect(TodoModal)');
      expect(modalProps).toEqual(['isOpen', 'modalOptions', 'closeModal']);
    });
  });

  context('when it is signin modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: false,
          modalName: 'signin',
          modalOptions: {},
        },
      };
    });

    it('renders SigninModal component', () => {
      component = renderComponent().find('ModalContainer').shallow();
      const modalProps = containerProps(component);

      expect(component).toBePresent();
      expect(component.name()).toEqual('Connect(SigninModal)');
      expect(modalProps).toEqual(['isOpen', 'modalOptions', 'closeModal']);
    });
  });

  context('when it is signup modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: false,
          modalName: 'signup',
          modalOptions: {},
        },
      };
    });

    it('renders SignupModal component', () => {
      component = renderComponent().find('ModalContainer').shallow();
      const modalProps = containerProps(component);

      expect(component).toBePresent();
      expect(component.name()).toEqual('Connect(SignupModal)');
      expect(modalProps).toEqual(['isOpen', 'modalOptions', 'closeModal']);
    });
  });
});
