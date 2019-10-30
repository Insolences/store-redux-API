import { connect } from "react-redux";
import { App } from "./App";
import { actionIsInit } from "../../Store/Action";

function mapDispatchToProps(dispatch) {
  return {
    isInitEvent: () => dispatch(actionIsInit())
  };
}

function mapStateToProps(state) {
  return {
    isInit: state.app.isInit
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
