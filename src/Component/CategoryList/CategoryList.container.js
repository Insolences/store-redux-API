import { connect } from "react-redux";
import { CategoryList } from "./CategoryList";
import { bindActionCreators } from "redux";
import { actionShowNotification } from "../../Store/Action";
import { getNotification } from "../../Store/Selector";

function mapDispatchToProps(dispatch) {
  return {
    showNotificationEvent: bindActionCreators(actionShowNotification, dispatch)
  };
}
function mapStateToProps(state) {
  return {
    notification: getNotification(state).massage
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
