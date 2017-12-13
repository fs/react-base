import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(require('reducers').default);
  });
}

export default store;
