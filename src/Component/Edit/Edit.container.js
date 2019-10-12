import { connect } from "react-redux";
import { Edit } from "./Edit";
import { actionEditProduct, actionGetProduct } from "../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    editProductEvent: (id, product) => dispatch(actionEditProduct(id, product)),
    getProductEvent: id => dispatch(actionGetProduct(id))
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
)(Edit);
