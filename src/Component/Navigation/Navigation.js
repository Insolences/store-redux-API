import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";
export function Navigation() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <Link
        to="/"
        className={`${"flex-sm-fill text-sm-center nav-link "} ${s.link}`}
      >
        Home
      </Link>
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
