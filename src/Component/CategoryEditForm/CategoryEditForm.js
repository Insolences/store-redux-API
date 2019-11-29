import React from "react";
import { Field, reduxForm } from "redux-form";
import { AsyncSelect } from "../AsyncSelect";
import { API } from "../../Service/API";
import s from "../CategoryEditForm/CategoryEditForm.module.css";
import { Link } from "react-router-dom";

class CategoryEditFormComponent extends React.Component {
  getCategoryOptionList = async selectValue => {
    let res;
    if (selectValue === "") {
      res = await API.getCategoryList();
    } else {
      res = await API.filterCategory(selectValue);
    }
    return this.showCategories(res.body.content);
  };

  showCategories = categories => {
    let categoryList = [];
    categories.forEach(el => {
      categoryList.push({ value: el.id, label: el.name });
      if (el.childs && el.childs.length > 0) {
        categoryList = [...categoryList, ...this.showCategories(el.childs)];
      }
    });
    return categoryList;
  };

  showErrors = errorKey => {
    if (this.props.errors[errorKey]) {
      return (
        <div className="error alert-danger text-center d-flex flex-column">
          {this.props.errors[errorKey].map(el => (
            <span>{el}</span>
          ))}
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Name</label>
          {this.showErrors("name")}
          <Field
            name="categoryName"
            component="input"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categorySlug">Slug</label>
          {this.showErrors("slug")}
          <Field
            name="categorySlug"
            component="input"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryParent">Parent</label>
          <Field
            name="categoryParent"
            component={props => (
              <AsyncSelect
                {...props}
                getCategoryOptionList={this.getCategoryOptionList}
              />
            )}
          />
        </div>
        <button className={`btn btn-success ${s.button}`} type="submit">
          Edit
        </button>
        <Link to="/category" className={`btn btn-info ${s.button_cancel}`}>
          Cancel
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: "category",
  enableReinitialize: true
})(CategoryEditFormComponent);
