import React from "react";
import { Link } from "react-router-dom";
import s from "./Admin.module.css";
import ProductList from "../ProductsList/ProductList";

export default class Admin extends React.Component {
  render() {
    return (
      <>
        <Link
          to="/admin/add"
          type="button"
          className={`${"btn btn-danger "} ${s.addProduct}`}
        >
          Add Product
        </Link>
        <ProductList isAdmin={true} />
      </>
    );
  }
}
