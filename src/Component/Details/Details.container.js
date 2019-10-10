import { connect } from "react-redux";
import { Details } from "./Details";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Details);
