import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

import reducers from './reducers';

import Example from "./containers/example/example"

const store = createStore(
  reducers,
)

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('app')
)
