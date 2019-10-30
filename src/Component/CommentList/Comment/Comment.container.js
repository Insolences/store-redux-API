import { connect } from "react-redux";
import { Comment } from "./Comment";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(Comment);
