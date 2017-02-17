import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import { Simulate } from 'react-dom/lib/ReactTestUtils';
import TodoModal from 'components/todoModal';

describe('Todo Modal', () => {
  const state = { isModalOpen: true };
  const todoModalComponent = mount(<TodoModal />);
  let modalDialogContent;

  beforeAll(() => {
    todoModalComponent.setState(state);
    modalDialogContent = todoModalComponent.find(Modal).node._modal.getDialogElement();
  });

  afterAll(() => {
    todoModalComponent.unmount();
  });

  it('has Modal component', () => {
    expect(todoModalComponent.find(Modal).length).toEqual(1);
  });

  it('renders Modal with form fields', () => {
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(1);
  });

  describe('when task name is too short', () => {
    it('appears error class', () => {
      const inputTask = modalDialogContent.querySelector('.form-control');

      Simulate.change(inputTask, {
        target: {
          value: 'sht'
        }
      });

      expect(inputTask.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when task name is valid', () => {
    it('appears success class', () => {
      const inputTask = modalDialogContent.querySelector('.form-control');

      Simulate.change(inputTask, {
        target: {
          value: 'someTaskName'
        }
      });

      expect(inputTask.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });
});
