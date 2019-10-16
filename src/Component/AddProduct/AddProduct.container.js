import { connect } from "react-redux";
import { AddProduct } from "./AddProduct";
import { actionAddProduct } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    addProductEvent: product => dispatch(actionAddProduct(product))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddProduct);
