import { combineReducers } from 'redux';
import application from './application';
import signin from './signin';
import signup from './signup';
import session from './session';

const rootReducer = combineReducers({
  application,
  signin,
  signup,
  session
});

export default rootReducer;
