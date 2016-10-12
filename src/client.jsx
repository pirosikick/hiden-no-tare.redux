import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';
import { init } from './actions/app';

const store = configureStore({});
const renderCallback = () => {
  store.dispatch(init());
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  renderCallback
);
