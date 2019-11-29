import React from "react";
import { Category } from "./Category";
import { API } from "../../Service/API";
import s from "./CategoryList.module.css";
import { CategoryForm } from "../CategoryForm/CategoryForm";

export class CategoryList extends React.Component {
  state = {
    categoryList: [],
    errors: {}
  };

  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList = () => {
    API.getCategoryList().then(res => {
      if (res.status === 200) {
        let categoryList = res.body.content;
        this.setState({
          categoryList: categoryList
        });
        return res;
      }
      return JSON.stringify(res.status);
    });
  };

  deleteCategory = id => {
    API.deleteCategory(id).then(res => {
      if (res.status === 200) {
        this.props.showNotificationEvent("Category deleted");
        this.getCategoryList();
      }
    });
  };

  handleSubmit = values => {
    this.addCategory(values);
  };

  addCategory = values => {
    let name = values.name;
    let slug = values.slug || values.name;
    let parentId = values.parent ? values.parent.value : null;
    API.addCategory(name, slug, parentId).then(res => {
      if (res.status === 200) {
        this.props.showNotificationEvent("Category added");
        this.getCategoryList();
      }
      return this.setState({
        errors: res.body.errors
      });
    });
  };

  renderCategoryList(categoryList, depth = 0) {
    return (
      <>
        {categoryList.map(el => (
          <>
            <Category
              category={el}
              depth={depth}
              id={el.id}
              deleteCategory={this.deleteCategory}
            />
            {el.childs.length
              ? this.renderCategoryList(el.childs, depth + 1)
              : ""}
          </>
        ))}
      </>
    );
  }

  render() {
    return (
      <>
        <h2 className={s.title}>Categories:</h2>
        <div className={s.wrapper}>
          <div className={s.addContainer}>
            <h3>Add categories</h3>
            <CategoryForm
              onSubmit={this.handleSubmit}
              errors={this.state.errors}
            />
          </div>
          <div className={s.container}>
            <h3>Categories</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">SLUG</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>{this.renderCategoryList(this.state.categoryList)}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
