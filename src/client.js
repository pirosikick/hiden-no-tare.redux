import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';

render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error(err);
    }
  });
}
