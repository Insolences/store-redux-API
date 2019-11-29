import { connect } from "react-redux";
import { CommentList } from "./CommentList";
import { bindActionCreators } from "redux";
import { actionGetCommentsList } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    getCommentsListEvent: bindActionCreators(actionGetCommentsList, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CommentList);
