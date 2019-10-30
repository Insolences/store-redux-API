import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { RootReducer } from "../Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    app: RootReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
