import { handleActions } from 'redux-actions'
import actionTypes from 'constants/modal'

const { OPEN_MODAL, CLOSE_MODAL } = actionTypes;

const initialState = {
  isOpen: false,
  modalName: '',
  modalOptions: {}
}

export default handleActions({
  [OPEN_MODAL]: (state, { payload }) => {
    const { name, ...rest } = payload;

    return {
      isOpen: true,
      modalName: name,
      modalOptions: rest
    }
  },
  [CLOSE_MODAL]: (state) => ({
    ...initialState
  })
}, initialState)
