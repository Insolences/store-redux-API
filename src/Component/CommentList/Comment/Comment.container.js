import { connect } from "react-redux";
import { Comment } from "./Comment";
import { getUser } from "../../../Store/Selector/App";
function mapStateToProps(state) {
  return {
    user: getUser(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(Comment);
