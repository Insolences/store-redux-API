import React from "react";
import { Link } from "react-router-dom";
import s from "./Admin.module.css";
import { ProductList } from "../ProductsList";
import { Redirect } from "react-router";

export class Admin extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      this.setState({
        redirect: true
      });
    }
    let roles = [];
    for (let key in user) {
      if (key === "roles") {
        roles = user[key];
      }
    }
    if (roles.some(el => el.name === "ROLE_ADMIN")) {
      return this.setState({
        redirect: false
      });
    }
    return this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <>
        <Link
          to="/admin/add"
          type="button"
          className={`btn btn-danger ${s.addProduct}`}
        >
          Add Product
        </Link>
        <Link
          to="/category"
          type="button"
          className={`btn btn-info ${s.categories}`}
        >
          Categories
        </Link>
        <Link to="/tag" type="button" className={`btn btn-secondary ${s.tag}`}>
          Tags
        </Link>
        <ProductList isAdmin={true} />
      </>
    );
  }
}
