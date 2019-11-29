import { connect } from "react-redux";
import { EditCategory } from "./EditCategory";
import { bindActionCreators } from "redux";
import { actionShowNotification } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    showNotificationEvent: bindActionCreators(actionShowNotification, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EditCategory);
