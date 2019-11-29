import { GET_PRODUCT_LIST } from "../../Action";

const initState = {
  products: [],
  pages: 0,
  size: 4,
  pageNumber: 0
};

export function ProductListReducer(state = initState, action) {
  if (action.type === "GET_PRODUCT_LIST") {
    const { content, pageNumber, totalPages, size } = action.payload;

    return {
      ...state,
      products: content,
      pageNumber: pageNumber,
      pages: totalPages,
      size: size
    };
  }

  return state;
}
