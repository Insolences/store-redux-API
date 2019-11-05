import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import AsyncSelect from "react-select/async";
import s from "./CategoryList.module.css";

const CategoryFormComponent = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Name..."
        />
      </div>
      <div className="form-group">
        <label>Slug</label>
        <Field
          name="slug"
          component="input"
          type="text"
          className="form-control"
          placeholder="Slug..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Parent</label>
        {/*<AsyncSelect*/}
        {/*  cacheOptions*/}
        {/*  defaultOptions*/}
        {/*  loadOptions={props.promiseOptions}*/}
        {/*/>*/}
      </div>
      <button className={`btn btn-success ${s.button}`} type="submit">
        Add
      </button>
    </Form>
  );
};

export const CategoryForm = reduxForm({
  form: "category"
})(CategoryFormComponent);
