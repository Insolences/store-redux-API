import { connect } from "react-redux";
import { CategoryList } from "./CategoryList";

function mapStateToProps(state) {
  return {
    categoryList: state.categoryList
  };
}

export default connect(
  mapStateToProps,
  null
)(CategoryList);
