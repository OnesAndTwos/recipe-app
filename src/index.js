import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import recipeApp from './reducers/recipeApp';
import Index from './pages/Index';

render(
  <Provider store={createStore(recipeApp)}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
