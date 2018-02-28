import { handleActions } from 'redux-actions';
import { OPEN_MODAL, CLOSE_MODAL } from 'actions/modal';

const initialState = {
  isOpen: false,
  modalName: '',
  modalOptions: {},
};

export default handleActions({
  [OPEN_MODAL]: (state, { payload }) => {
    const { name, ...rest } = payload;

    return {
      isOpen: true,
      modalName: name,
      modalOptions: rest,
    };
  },
  [CLOSE_MODAL]: () => ({
    ...initialState,
  }),
}, initialState);
