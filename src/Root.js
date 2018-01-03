import React  from 'react';
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Search from "./pages/Search";

import history from './configureHistory';

const Root = ({ props, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/search" component={Search}/>
        <Route path="/" component={Index}/>
      </Switch>
    </Router>
  </Provider>
);


export default Root;