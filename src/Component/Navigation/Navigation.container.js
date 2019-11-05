import { connect } from "react-redux";
import { Navigation } from "./Navigation";
import { getUser } from "../../Store/Selector";

function mapStateToProps(state) {
  return {
    user: getUser(state).user
  };
}

export default connect(mapStateToProps)(Navigation);
