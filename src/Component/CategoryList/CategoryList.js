import React from "react";
import Category from "./Category/Category.container";
import { API } from "../../Service/API";
import s from "./CategoryList.module.css";
// import { Field } from "redux-form";
// import AsyncSelect from "react-select/async";

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

  addCategory() {}

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

  renderAddCategory() {
    return (
      <div>
        <form onSubmit={this.addCategory}>
          <div className="form-group">
            <label>Name</label>
            {/*<Field*/}
            {/*  name="Name"*/}
            {/*  component="input"*/}
            {/*  type="text"*/}
            {/*  placeholder="Name..."*/}
            {/*/>*/}
          </div>
          <div className="form-group">
            <label>Slug</label>
            {/*<Field*/}
            {/*  name="Slug"*/}
            {/*  type="text"*/}
            {/*  className="form-control"*/}
            {/*  placeholder="Slug..."*/}
            {/*/>*/}
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Parent</label>
            {/*<AsyncSelect*/}
            {/*  cacheOptions*/}
            {/*  defaultOptions*/}
            {/*  // loadOptions={this.promiseOptions}*/}
            {/*/>*/}
          </div>
          <button
            className={`btn btn-success ${s.button}`}
            onClick={this.addCategory}
            type="submit"
            // disabled={pristine || submitting}
          >
            Add
          </button>
        </form>
      </div>
    );
  }

  // filterCategories = inputValue => {
  //   let newCategories = this.state.categoryList.slice();
  //   return newCategories.filter(i =>
  //     i.label.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };
  //
  // promiseOptions = inputValue =>
  //   new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(this.filterCategories(inputValue));
  //     }, 1000);
  //   });

  render() {
    return (
      <>
        <h2 className={s.title}>Categories:</h2>
        <div className={s.wrapper}>
          <div className={s.addContainer}>
            <h3>Add categories</h3>
            {this.renderAddCategory()}
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
