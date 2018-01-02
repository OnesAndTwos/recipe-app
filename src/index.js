import React from "react";
import {render} from "react-dom";

import configureStore from './configureStore';
import configureSocket from './configureSocket';

import Root from './Root';

const store = configureStore();
const socket = configureSocket(store);

render(<Root store={store} />, document.getElementById('root'));