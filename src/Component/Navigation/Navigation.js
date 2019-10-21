import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";
import { API } from "../../Service/API";

export class Navigation extends React.Component {
  logOut = e => {
    e.preventDefault();
    API.logOut();
  };

  renderUserButtons() {
    const { user } = this.props;
    if (user) {
      return (
        <button className="btn btn-info" onClick={this.logOut}>
          {" "}
          LOG OUT
        </button>
      );
    }

    return (
      <>
        <Link to="/login" className="text-info align-self-center">
          Sign In
        </Link>
        <Link to="/registration" className="btn btn-info">
          {" "}
          SIGN UP
        </Link>
      </>
    );
  }

  renderAdminButton() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    let roles = [];
    for (let key in user) {
      if (key === "roles") {
        roles = user[key];
      }
    }
    if (roles.some(el => el.name === "ROLE_ADMIN")) {
      return (
        <Link
          to="/admin"
          className={`${"flex-sm-fill text-sm-center nav-link "} ${s.link}`}
        >
          Admin
        </Link>
      );
    }
    return null;
  }

  renderNavigation = () => {
    return (
      <>
        {this.renderUserButtons()}
        <nav className="nav nav-pills flex-column flex-sm-row">
          <Link
            to="/"
            className={`${"flex-sm-fill text-sm-center nav-link "} ${s.link}`}
          >
            Home
          </Link>
          {this.renderAdminButton()}
        </nav>
      </>
    );
  };

  render() {
    return this.renderNavigation();
  }
}
