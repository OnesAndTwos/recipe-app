import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import recipeApp from './reducers/recipeApp';
import Index from './pages/Index';

import io from 'socket.io-client';

const socket = io();

var store = createStore(recipeApp);

socket.on("message", data => {
  store.dispatch({
    type: 'SHOW_MESSAGE',
    ...data
  });
});

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
