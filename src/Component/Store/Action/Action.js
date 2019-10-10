import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./Type";

export function actionAddProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function actionEditProduct(product) {
  return {
    type: EDIT_PRODUCT,
    payload: product
  };
}

export function actionDeleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id
  };
}
