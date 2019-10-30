import React from "react";
import { Form, Field, reduxForm } from "redux-form";
import Category from "./Category/Category.container";
import { API } from "../../Service/API";
import s from "./CategoryList.module.css";
import AsyncSelect from "react-select/async";
import { CategoryForm } from "./CategoryForm";

export class CategoryList extends React.Component {
  state = {
    categoryList: []
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

  addCategory(e) {
    console.log(e);
  }

  renderCategoryList(categoryList) {
    return (
      <>
        {categoryList.map(el => (
          <>
            <Category category={el} />
            {el.childs.length ? this.renderCategoryList(el.childs) : ""}
          </>
        ))}
      </>
    );
  }

  filterCategories = inputValue => {
    // let newCategories = this.state.categoryList.slice();
    // return newCategories.filter(i =>
    //   i.label.toLowerCase().includes(inputValue.toLowerCase())
    // );
  };

  promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.filterCategories(inputValue));
      }, 1000);
    });

  render() {
    return (
      <>
        <h2 className={s.title}>Categories:</h2>
        <div className={s.wrapper}>
          <div className={s.addContainer}>
            <h3>Add categories</h3>
            <CategoryForm
              onSubmit={this.addCategory}
              promiseOptions={this.promiseOptions}
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
