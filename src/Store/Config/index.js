import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { UserReducer } from "../Reducers/UserReducer";
import { NotificationReducer } from "../Reducers/NotificationReducer";
import { ProductListReducer } from "../Reducers/ProductListReducer";
import { RootReducer } from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    app: RootReducer,
    user: UserReducer,
    productsPagination: ProductListReducer,
    notification: NotificationReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
