import { createActions } from 'redux-actions';
import actionTypes from 'constants/modal';

const { OPEN_MODAL, CLOSE_MODAL } = actionTypes;

const actions = createActions(
  OPEN_MODAL,
  CLOSE_MODAL
);

export default actions;
