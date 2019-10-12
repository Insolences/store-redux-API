import {ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_LIST, GET_PRODUCT} from "../Action";

export function RootReducer(state, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:{
      let newProducts = action.payload.content;
      let pageNumber = action.payload.pageNumber;
      let pages = action.payload.totalPages;
      return { ...state, products: newProducts, pageNumber: pageNumber, pages:pages}
    }

    case GET_PRODUCT:{
      let product = action.payload;
      let newProducts = [];
      newProducts.push(product);
      return {
        ...state,
      products: newProducts
      }
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
