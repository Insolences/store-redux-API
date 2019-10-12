import { connect } from "react-redux";
import { ProductList } from "./ProductList";
import { actionDeleteProduct, actionGetProductList } from "../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    getProductListEvent: page => dispatch(actionGetProductList(page)),
    deleteProductEvent: id => dispatch(actionDeleteProduct(id))
  };
}

function mapStateToProps(state) {
  return {
    products: state.products,
    pages: state.pages,
    pageNumber: state.pageNumber
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
