import { combineReducers } from 'redux';
import application from './application';
import signin from './signin';

const rootReducer = combineReducers({
  application,
  signin
});

export default rootReducer;
