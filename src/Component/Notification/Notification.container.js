import { connect } from "react-redux";
import { Notification } from "./Notification";
import { bindActionCreators } from "redux";
import { actionClearErrorMessage } from "../../Store/Action";
import { getNotification } from "../../Store/Selector";

function mapStateToProps(state) {
  return {
    error: getNotification(state).error,
    message: getNotification(state).message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearErrorMassageEvent: bindActionCreators(
      actionClearErrorMessage,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
