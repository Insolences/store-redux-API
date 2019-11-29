import React from "react";
import { API } from "../../Service/API";
import { Redirect } from "react-router-dom";
import s from "./EditCategory.module.css";
import CategoryEditForm from "../CategoryEditForm/CategoryEditForm";

export class EditCategory extends React.Component {
  state = {
    categoryList: [],
    categoryName: "",
    categorySlug: "",
    categoryParent: "",
    errors: {},
    redirect: false
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    API.getCategory(id).then(res => {
      if (res.status !== 200) {
        alert("ERROR");
      } else {
        let categoryParent = res.body.parent
          ? { label: res.body.parent.name, value: res.body.parent.id }
          : null;
        this.setState({
          categoryName: res.body.name,
          categorySlug: res.body.slug,
          categoryParent: categoryParent
        });
      }
    });
  }

  handleSubmit = values => {
    this.editCategory(values);
  };

  editCategory = async values => {
    let name = values.categoryName;
    let slug = values.categorySlug || values.categoryName;
    let id = this.props.match.params.id;
    let parentId = values.parent ? values.parent.value : null;
    API.editCategory(id, name, slug, parentId).then(res => {
      if (res.status !== 200) {
        this.setState({
          errors: res.body.errors
        });
      } else {
        this.props.showNotificationEvent("Success edit category");
        this.setState({
          redirect: true,
          errors: {}
        });
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/category" />;
    } else
      return (
        <>
          <h2 className={s.title}>Edit Category:</h2>
          <div className={s.wrapper}>
            <div className={s.addContainer}>
              <CategoryEditForm
                onSubmit={this.handleSubmit}
                categoryName={this.state.categoryName}
                categorySlug={this.state.categorySlug}
                categoryParent={this.state.categoryParent}
                errors={this.state.errors}
              />
            </div>
          </div>
        </>
      );
  }
}
