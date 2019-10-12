import React from "react";
import s from "./Pagination.module.css";
import { ListItem } from "../ListItem";

export default class Pagination extends React.Component {

  NumberList = () => {
    let lengthPage = this.props.pages;
    let listPages = [];
    for (let i = 0; i < lengthPage; i++) {
      listPages.push(
        <ListItem
          index={i}
          key={i}
          changePage={this.props.changePage}
          pageNumber={this.props.pageNumber}
        />
      );
    }
    return listPages;
  };

  render() {
    return (
      <>
        <ul className={`pagination ${s.pagination}`}>{this.NumberList()}</ul>
        {/*{this.renderOptions()}*/}
      </>
    );
  }
}
