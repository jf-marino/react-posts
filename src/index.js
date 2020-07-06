import 'regenerator-runtime/runtime'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './state/store';
import { Application } from './components/application/Application';

render((
  <Provider store={store}>
    <Application />
  </Provider>
), document.getElementById('root'));
