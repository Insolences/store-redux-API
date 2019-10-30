import { connect } from "react-redux";
import { CategoryList } from "./CategoryList";

function mapStateToProps(state) {
  return {
    categoryList: state.app.categoryList
  };
}

export default connect(mapStateToProps)(CategoryList);
