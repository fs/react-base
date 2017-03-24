import { combineReducers } from 'redux'
import session from './session'
import todos from './todos'

const rootReducer = combineReducers({
  session,
  todos
})

export default rootReducer
