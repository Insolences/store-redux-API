import { createAction } from "redux-actions";

import {
  USER_LOGIN,
  SHOW_NOTIFICATION,
  SHOW_ERROR_MASSAGE,
  CLEAR_ERROR_MESSAGE,
  GET_PRODUCT_LIST,
  GET_PRODUCT
} from "./Type";

import { API } from "../../Service/API/index";

export const actionGetProductList = page => dispatch => {
  API.getProductsList(page).then(res => {
    if (res.status !== 200) {
      dispatch(actionShowError("No connect from server"));
    } else dispatch(actionGetProductListSuccess(res.body));
  });
};

export const actionGetProductListSuccess = products => {
  return {
    type: GET_PRODUCT_LIST,
    payload: products
  };
};

export const actionGetProduct = id => dispatch => {
  return API.getProduct(id).then(res => {
    if (res.status !== 200) {
      dispatch(actionShowError("No connect from server"));
    } else dispatch(actionGetProductSuccess(res));
    return res;
  });
};

export const actionGetProductSuccess = res => {
  return {
    type: GET_PRODUCT,
    payload: res
  };
};

export const actionAddProduct = product => dispatch => {
  return API.addProduct(product).then(res => {
    if (res.status !== 200) {
      return res;
    } else dispatch(actionShowNotification("Success add product"));
    return res;
  });
};

export const actionEditProduct = (id, product) => dispatch => {
  return API.editProduct(id, product).then(res => {
    if (res.status !== 200) {
      return res;
    } else {
      dispatch(actionShowNotification("Success edit product"));
    }
    return res;
  });
};

export const actionDeleteProduct = id => dispatch => {
  return API.deleteProduct(id)
    .then(res => {
      dispatch(actionShowNotification("Success removed product"));
      return res;
    })
    .catch(() => {
      dispatch(actionShowError("Something wrong. Product not removed"));
    });
};

export const actionClearErrorMessage = createAction(CLEAR_ERROR_MESSAGE);
export const actionShowNotification = createAction(SHOW_NOTIFICATION);
export const actionUserLogin = createAction(USER_LOGIN);
export const actionShowError = createAction(SHOW_ERROR_MASSAGE);
