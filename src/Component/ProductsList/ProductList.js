import React from "react";
import { Product } from "../Product";
import s from "./ProductList.module.css";
import { Pagination } from "../Pagination";

export class ProductList extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.getProductListEvent(this.props.size, this.props.pageNumber);
  }

  ToDelete = id => {
    this.props.deleteProductEvent(id).then(() => {
      this.setState({
        redirect: true
      });
      this.props.getProductListEvent(this.props.pageNumber);
    });
  };

  render() {
    return (
      <>
        <h2 className={s.h2_home}>Product List</h2>
        <div className={s.cardGroup}>
          {this.props.products.map(el => (
            <Product
              key={el.id}
              product={el}
              isAdmin={this.props.isAdmin}
              ToDelete={this.ToDelete}
            />
          ))}
        </div>
        <Pagination
          pageNumber={this.props.pageNumber}
          size={this.props.size}
          pages={this.props.pages}
          changePage={this.props.getProductListEvent}
        />
      </>
    );
  }
}
