import { connect } from "react-redux";
import { Admin } from "./Admin";
import { getUser } from "../../Store/Selector/App";
function mapStateToProps(state) {
  return {
    user: getUser(state).user
  };
}

export default connect(mapStateToProps)(Admin);
