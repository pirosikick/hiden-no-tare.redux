import { createStore } from 'redux';
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers'));
    });
  }
  return store;
}
