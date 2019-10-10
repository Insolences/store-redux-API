import { connect } from "react-redux";
import { Admin } from "./Admin";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Admin);
