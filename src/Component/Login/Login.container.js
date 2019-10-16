import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionShowError, actionShowNotification } from "../../Store/Action";
import { Login } from "./Login";

const mapDispatchToProps = dispatch => ({
  showErrorEvent: bindActionCreators(actionShowError, dispatch),
  showNotificationEvent: bindActionCreators(actionShowNotification, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
