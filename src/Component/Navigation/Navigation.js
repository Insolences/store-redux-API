import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export default class Navigation extends React.Component {
  state = {
    isAdmin: this.props.isAdmin
  };
  render() {
    if (this.state.isAdmin) {
      return (
        <nav className="nav nav-pills flex-column flex-sm-row">
          <Link
            to="/admin"
            className={`${"flex-sm-fill text-sm-center nav-link "} ${s.link}`}
            href="#"
          >
            Admin
          </Link>
        </nav>
      );
    }
    return (
      <nav className="nav nav-pills flex-column flex-sm-row">
        <Link
          to="/"
          className={`${"flex-sm-fill text-sm-center nav-link "} ${s.link}`}
        >
          Home
        </Link>
      </nav>
    );
  }
}
