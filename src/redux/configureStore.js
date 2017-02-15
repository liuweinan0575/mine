import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

export default function configureStore(history, initialState = {}) {

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  );

  /// enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
