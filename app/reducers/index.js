import { combineReducers } from 'redux'
import session from './session'
import todos from './todos'
import modal from './modal'

export default combineReducers({
  session,
  todos,
  modal
})
