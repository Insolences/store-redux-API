import React from "react";
import { Product } from "../Product";
import s from "./ProductList.module.css";
import { Navigation } from "../Navigation";
import Pagination from "../Pagination/Pagination";

export class ProductList extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.getProductListEvent(this.props.pageNumber);
    console.log(this.props.products);
  }

  ToDelete = id => {
    this.props.deleteProductEvent(id).then(() => {
      this.setState({
        redirect: true
      });
      this.props.getProductListEvent(this.props.pageNumber);
      console.log("Removed product");
    });
  };

  render() {
    return (
      <>
        <Navigation isAdmin={this.props.isAdmin} />
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
          pages={this.props.pages}
          pageNumber={this.props.pageNumber}
          changePage={this.props.getProductListEvent}
        />
      </>
    );
  }
}
