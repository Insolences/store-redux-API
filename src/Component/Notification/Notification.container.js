import { connect } from "react-redux";
import { Notification } from "./Notification";
import { bindActionCreators } from "redux";
import { actionClearErrorMessage } from "../../Store/Action";

function mapStateToProps(state) {
  return {
    error: state.error,
    message: state.message
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
