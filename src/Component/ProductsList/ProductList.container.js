import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList } from "./ProductList";
import { actionDeleteProduct, actionGetProductList } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    //getProductListEvent: page => dispatch(actionGetProductList(page)),
    getProductListEvent: bindActionCreators(actionGetProductList, dispatch),
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
