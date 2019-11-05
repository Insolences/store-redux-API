import {
  IS_INIT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_LIST,
  GET_PRODUCT,
  CLEAR_ERROR_MESSAGE,
  SHOW_ERROR_MASSAGE,
  SHOW_NOTIFICATION,
  GET_COMMENTS_LIST
} from "../../Action";
import { initState } from "../../InitState";

export function RootReducer(state = initState.app, action) {
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }

    case GET_PRODUCT_LIST: {
      const { content, pageNumber, totalPages, size } = action.payload;

      return {
        ...state,
        products: content,
        pageNumber: pageNumber,
        pages: totalPages,
        size: size
      };
    }

    case GET_PRODUCT: {
      let product = action.payload;
      return {
        ...state,
        product: product
      };
    }

    case ADD_PRODUCT: {
      let product = action.payload;
      let newProducts = state.products.slice();
      newProducts.push(product);
      return { ...state, products: newProducts };
    }

    case EDIT_PRODUCT: {
      let product = action.payload;
      let newProducts = state.products.map(el => {
        if (el.id === product.id) {
          return { ...el, ...product };
        }
        return el;
      });
      return { ...state, products: newProducts };
    }

    case DELETE_PRODUCT: {
      let id = action.payload;
      let newProducts = state.products.slice();
      newProducts = state.products.filter(e => e.id !== id);
      return { ...state, products: newProducts };
    }

    // case SHOW_ERROR_MASSAGE: {
    //   return { ...state, error: action.payload };
    // }
    //
    // case CLEAR_ERROR_MESSAGE: {
    //   return { ...state, error: null, message: null };
    // }
    //
    // case SHOW_NOTIFICATION: {
    //   return { ...state, message: action.payload };
    // }
    //
    // case GET_COMMENTS_LIST: {
    //   const { pageNumber, totalPages, commentSize } = action.payload;
    //   return {
    //     ...state,
    //     pages: totalPages,
    //     pageNumber: pageNumber,
    //     commentSize: commentSize
    //   };
    // }
  }

  return state;
}
