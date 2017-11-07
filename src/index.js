import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import recipeApp from './reducers/recipeApp';
import RecipeApp from './components/RecipeApp';

render(
  <Provider store={createStore(recipeApp)}>
    <RecipeApp />
  </Provider>,
  document.getElementById("root")
);
