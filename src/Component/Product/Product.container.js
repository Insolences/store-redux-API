import { connect } from "react-redux";
import { Product } from "./Product";
import { actionDeleteProduct } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    deleteProductEvent: id => dispatch(actionDeleteProduct(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Product);
