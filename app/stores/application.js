import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers'
//
// const setupStore = () => {
//   return 
// }

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
