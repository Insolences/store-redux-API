import {
  IS_INIT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_LIST,
  GET_PRODUCT,
  CLEAR_ERROR_MESSAGE,
  USER_LOGIN,
  USER_LOG_OUT,
  SHOW_ERROR_MASSAGE,
  SHOW_NOTIFICATION
} from "../Action/index";

export function RootReducer(state, action) {
  switch (action.type) {
    case IS_INIT: {
      return { ...state, isInit: true };
    }

    case GET_PRODUCT_LIST: {
      const { content, pageNumber, totalPages } = action.payload;

      return {
        ...state,
        products: content,
        pageNumber: pageNumber,
        pages: totalPages
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

    case USER_LOGIN:
      return { ...state, user: action.payload };

    case USER_LOG_OUT:
      return { ...state, user: null };

    case SHOW_ERROR_MASSAGE: {
      return { ...state, error: action.payload };
    }

    case CLEAR_ERROR_MESSAGE: {
      return { ...state, error: null, message: null };
    }

    case SHOW_NOTIFICATION: {
      return { ...state, message: action.payload };
    }
  }

  return state;
}
