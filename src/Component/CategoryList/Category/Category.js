import React from "react";
import s from "./Category.module.css";

export class Category extends React.Component {
  state = {};

  renderButtonCategory() {
    return (
      <>
        <button className={`btn btn-info ${s.button}`}>Edit</button>
        <button className={`btn btn-danger ${s.button}`}>Delete</button>
      </>
    );
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.category.parent
            ? "-" + this.props.category.name
            : this.props.category.name}
        </td>
        <td>{this.props.category.slug}</td>
        <td>{this.renderButtonCategory()}</td>
      </tr>
    );
  }
}
