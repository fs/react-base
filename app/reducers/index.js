import { combineReducers } from 'redux';
import application from './application';
import signin from './signin';
import signup from './signup';

const rootReducer = combineReducers({
  application,
  signin,
  signup
});

export default rootReducer;
