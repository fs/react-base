import { combineReducers } from 'redux';

function reducer(state = {
  todos: []
}, action) {
  switch (action.type) {
  case "ACTION":
    return {
      ...state
    };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
