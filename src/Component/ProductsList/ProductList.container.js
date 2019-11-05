import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList } from "./ProductList";
import {
  getProducts,
  getPagination
  // getPaginationPageNumber,
  // getPaginationPages,
  // getPaginationSize
} from "../../Store/Selector/App";
import { actionDeleteProduct, actionGetProductList } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    getProductListEvent: bindActionCreators(actionGetProductList, dispatch),
    deleteProductEvent: id => dispatch(actionDeleteProduct(id))
  };
}

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    pages: getPagination(state).pages,
    pageNumber: getPagination(state).pageNumber,
    size: getPagination(state).size
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
