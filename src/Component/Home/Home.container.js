import { connect } from "react-redux";
import { Home } from "./Home";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Home);
