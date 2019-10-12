import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Component/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./Component/Store/Reducer";
import { initState } from "./Component/Store/InitState";
import thunk from 'redux-thunk';



import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const store = createStore(RootReducer, initState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
