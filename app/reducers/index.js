import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';
import session from './session';
import todo from './todo';
import todos from './todos';

const rootReducer = combineReducers({
  signin,
  signup,
  session,
  todo,
  todos
});

export default rootReducer;
