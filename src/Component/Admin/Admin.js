import React from "react";
import { Link } from "react-router-dom";
import s from "./Admin.module.css";
import { ProductList } from "../ProductsList";
import { API } from "../../Service/API";

export class Admin extends React.Component {
  logOut = e => {
    e.preventDefault();
    API.logOut().then();
  };

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
        <button className="btn btn-info ">
          <Link to="/" onClick={this.logOut}>
            {" "}
            LOG OUT
          </Link>
        </button>

        <ProductList isAdmin={true} />
      </>
    );
  }
}
