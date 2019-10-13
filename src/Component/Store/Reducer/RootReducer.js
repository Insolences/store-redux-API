import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_LIST,
  GET_PRODUCT
} from "../Action";

export function RootReducer(state, action) {
  switch (action.type) {
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
  }

  return state;
}
