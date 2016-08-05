import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, promiseMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers'));
    });
  }
  return store;
}
