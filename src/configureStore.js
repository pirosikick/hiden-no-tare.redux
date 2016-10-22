import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

function configureStore(initialState = {}) {
  let middlewares = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  );

  if (process.env.NODE_ENV === 'production' && window.devToolsExtension) {
    middlewares = compose(
      middlewares,
      window.devToolsExtension()
    );
  }

  return createStore(reducers, initialState, middlewares);

  // for HMR
  // const store = createStore(reducers, initialState, middlewares);
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(require('./reducers'));
  //   });
  // }
  // return store;
}

export default configureStore;
