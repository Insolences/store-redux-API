import { connect } from "react-redux";
import { Home } from "./Home";
import { getUser } from "../../Store/Selector/App";
function mapStateToProps(state) {
  return {
    user: getUser(state).user
  };
}

export default connect(mapStateToProps)(Home);
