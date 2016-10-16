import * as ActionTypes from 'actions/application';

const initialState = {
  isModalOpen: false,
  modalName: '',
  modalOptions: {}
};

export default function application(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.OPEN_MODAL:
    return {
      ...state,
      isModalOpen: true,
      modalName: action.name
    };
  case ActionTypes.CLOSE_MODAL:
    return {
      ...state,
      isModalOpen: false,
      modalName: ''
    };
  default:
    return state;
  }
}
