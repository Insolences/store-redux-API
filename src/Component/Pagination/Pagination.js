import React from "react";
import s from "./Pagination.module.css";
import { ListItem } from "../ListItem";

export default class Pagination extends React.Component {
  // state={
  //     optionsState:[]
  // };
  //
  // renderOptions = ()=>{
  //     return (
  //         <select value={this.state.optionsState}>
  //             <option value="4">4 product in page</option>
  //             <option value="8">8 product in page</option>
  //             <option value="12">12 product in page</option>
  //         </select>
  //     )
  // };
  //

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
