import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "../Reducer/index";
import { initState } from "../InitState/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  RootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);
