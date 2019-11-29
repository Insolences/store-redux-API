import React from "react";
import s from "./Category.module.css";
import { Link } from "react-router-dom";

export class Category extends React.Component {
  handleDeleteCategory = id => {
    this.props.deleteCategory(id);
  };

  renderButtonCategory() {
    return (
      <>
        <Link
          to={`/category/${this.props.id}`}
          className={`btn btn-info ${s.button}`}
        >
          Edit
        </Link>
        <button
          className={`btn btn-danger ${s.button}`}
          onClick={() => {
            this.handleDeleteCategory(this.props.id);
          }}
        >
          Delete
        </button>
      </>
    );
  }

  render() {
    return (
      <>
        <tr>
          <td>{"-".repeat(this.props.depth) + this.props.category.name}</td>
          <td>{this.props.category.slug}</td>
          <td>{this.renderButtonCategory()}</td>
        </tr>
      </>
    );
  }
}
