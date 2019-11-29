import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList } from "./ProductList";
import {
  getProducts,
  getNotification,
  getProductsPagination
} from "../../Store/Selector/App";
import { actionDeleteProduct, actionGetProductList } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    getProductListEvent: (size, page) =>
      dispatch(actionGetProductList(size, page)),
    deleteProductEvent: id => dispatch(actionDeleteProduct(id))
  };
}

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    pages: getProductsPagination(state).pages,
    pageNumber: getProductsPagination(state).pageNumber,
    size: getProductsPagination(state).size,
    notification: getNotification(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
