import { connect } from "react-redux";
import { Edit } from "./Edit";
import { actionEditProduct } from "../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    editProductEvent: product => dispatch(actionEditProduct(product))
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
