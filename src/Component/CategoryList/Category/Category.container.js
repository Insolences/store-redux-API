import { connect } from "react-redux";
import { Category } from "./Category";
import { bindActionCreators } from "redux";
import { actionShowNotification } from "../../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    showNotificationEvent: bindActionCreators(actionShowNotification, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Category);
