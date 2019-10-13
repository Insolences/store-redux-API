import {
  GET_PRODUCT_LIST,
  GET_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "./Type";
import { API } from "../../API";

export const actionGetProductList = page => dispatch => {
  API.getProductsList(page).then(res => {
    if (res.status !== 200) {
      alert("Что то пошло не так");
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
      alert("Что то пошло не так");
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

export const actionAddProduct = product => () => {
  return API.addProduct(product).then(res => {
    if (res.status !== 200) {
      return res;
    } else alert("Success");
    return res;
  });
};

export const actionEditProduct = (id, product) => dispatch => {
  return API.editProduct(id, product).then(res => {
    if (res.status !== 200) {
      return res;
    } else dispatch(actionEditProductSuccess(res));
    return res;
  });
};

export const actionEditProductSuccess = product => {
  return {
    type: EDIT_PRODUCT,
    payload: product
  };
};

export const actionDeleteProduct = id => dispatch => {
  return API.deleteProduct(id)
    .then(res => {
      dispatch(actionDeleteProductSuccess(res));
      alert("Removed product");
      return res;
    })
    .catch(() => {
      alert("ERROR");
    });
};

export const actionDeleteProductSuccess = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  };
};
