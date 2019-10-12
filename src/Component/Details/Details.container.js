import { connect } from "react-redux";
import { Details } from "./Details";
import { actionGetProduct } from "../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
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
)(Details);
