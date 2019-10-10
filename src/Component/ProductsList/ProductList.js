import React from "react";
import Product from "../Product/Product";
import s from "./ProductList.module.css";
import { Navigation } from "../Navigation/Navigation";
import { API } from "../API";
import Pagination from "../Pagination/Pagination";

export default class ProductList extends React.Component {
  state = {
    products: [],
    redirect: false
  };

  componentDidMount() {
    this.getProductList(0);
  }

  getProductList = page => {
    API.getProductsList(page).then(res => {
      if (res.status !== 200) {
        alert("Что то пошло не так");

        return;
      }

      this.setState({
        products: res.body,
        pages: res.totalPages,
        size: res.size,
        pageNumber: res.pageNumber
      });
    });
  };

  ToDelete = id => {
    API.deleteProduct(id)
      .then(() => {
        this.setState({
          redirect: true
        });
        this.getProductList(0);
        console.log("Removed product");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2_home}>Product List</h2>
        <div className={s.cardGroup}>
          {this.state.products.map((el, index) => (
            <Product
              key={el.id}
              product={el}
              isAdmin={this.props.isAdmin}
              ToDelete={this.ToDelete}
            />
          ))}
        </div>
        <Pagination
          pages={this.state.pages}
          pageNumber={this.state.pageNumber}
          changePage={this.getProductList}
        />
      </>
    );
  }
}
