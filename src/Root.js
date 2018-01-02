import React  from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Search from "./pages/Search";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={Search}/>
        <Route path="/" component={Index}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);


export default Root;