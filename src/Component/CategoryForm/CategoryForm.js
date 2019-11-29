import React from "react";
import { Field, reduxForm } from "redux-form";
import { AsyncSelect } from "../AsyncSelect";
import { API } from "../../Service/API";
import s from "../CategoryList/CategoryList.module.css";

export default class CategoryFormComponent extends React.Component {
  state = {
    errors: null
  };

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
          <label htmlFor="name">Name</label>
          {this.showErrors("name")}
          <Field
            name="name"
            component="input"
            className="form-control"
            type="text"
            placeholder="Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          {this.showErrors("slug")}
          <Field
            name="slug"
            component="input"
            type="text"
            className="form-control"
            placeholder="Slug..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="parent">Parent</label>
          <Field
            name="parent"
            component={props => (
              <AsyncSelect
                {...props}
                getCategoryOptionList={this.getCategoryOptionList}
              />
            )}
          />
        </div>
        <button className={`btn btn-success ${s.button}`} type="submit">
          Add
        </button>
      </form>
    );
  }
}

export const CategoryForm = reduxForm({
  form: "category"
})(CategoryFormComponent);
