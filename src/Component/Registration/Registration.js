import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export default class Registration extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Sign up</p>
          <div className="form-row mb-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
          />
          <input
            type="confirmPassword"
            className="form-control mb-4"
            placeholder="confirm password"
          />
          <button className="btn btn-info my-4 btn-block" type="submit">
            Registration
          </button>
          <p>
            Have account?
            <Link to="/login">Sign in</Link>
          </p>
        </form>
      </>
    );
  }
}
