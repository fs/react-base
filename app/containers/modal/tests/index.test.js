import React from 'react';
import { shallow } from 'enzyme';
import withStore from 'helpers/store';
import Modal from 'containers/modal';

describe('Modal', () => {
  let state;
  const modalComponent = () => shallow(withStore(<Modal />, state));

  context('when it is todo modal', () => {
    beforeEach(() => {
      state = {
        modal: {
          isOpen: false,
          modalName: 'todo',
          modalOptions: {}
        }
      };
    });

    it('renders correctly', () => {
      // const component = modalComponent();
      //
      // expoct(component.find(''))
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
