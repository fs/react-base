import { combineReducers } from 'redux'
import signin from './signin'
import signup from './signup'
import session from './session'
import todos from './todos'

const rootReducer = combineReducers({
  signin,
  signup,
  session,
  todos
})

export default rootReducer
