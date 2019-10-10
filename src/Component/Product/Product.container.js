import { connect } from "react-redux";
import { Product } from "./Product";
import { actionDeleteProduct } from "../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    deleteProductEvent: id => dispatch(actionDeleteProduct(id))
  };
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
