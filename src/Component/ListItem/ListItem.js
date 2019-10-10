import React from "react";
import s from "./ListItem.module.css";

export default class ListItem extends React.Component {
  handlerChangePage = e => {
    e.preventDefault();
    let index = this.props.index;
    this.props.changePage(index);
  };

  render() {
    return (
      <li className={`${"page-item "} ${s.li}`}>
        <a
          onClick={this.handlerChangePage}
          className={`${
            this.props.pageNumber === this.props.index
              ? s.isActive
              : "page-link"
          }`}
        >
          {" "}
          {this.props.index + 1}
        </a>
      </li>
    );
  }
}
