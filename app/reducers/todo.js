import { handleActions } from 'redux-actions'
import actionTypes from 'constants/todo'

const { SET_NAME, SUCCESS_CREATE } = actionTypes
const initialState = {
  name: '',
  isComplete: false
}

export default handleActions({
  [SET_NAME]: (state, { payload }) => ({
    ...state,
    name: payload
  }),
  [SUCCESS_CREATE]: () => ({
    ...initialState
  })
}, initialState)
