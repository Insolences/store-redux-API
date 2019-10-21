import { connect } from "react-redux";
import { Navigation } from "./Navigation";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
