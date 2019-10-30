import { connect } from "react-redux";
import { CommentList } from "./CommentList";
import { bindActionCreators } from "redux";
import { actionGetCommentsList } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    getCommentsListEvent: bindActionCreators(actionGetCommentsList, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    parentId: state.parentId,
    pages: state.pages,
    pageNumber: state.pageNumber,
    size: state.commentsSize
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
