import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { UserReducer } from "../Reducers/UserReducer/index";
import { NotificationReducer } from "../Reducers/NotificationReducer";
import { PaginationReducer } from "../Reducers/PaginationReducer";
import { RootReducer } from "../Reducers/RootReducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    app: RootReducer,
    user: UserReducer,
    pagination: PaginationReducer,
    notification: NotificationReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
