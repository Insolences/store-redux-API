import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export default class Login extends React.Component {

  inputEmailRef = React.createRef();
  inputPasswordRef = React.createRef();

  render() {
    return (
      <>
        <Navigation />
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Sign in</p>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="E-mail"
            ref={this.inputEmailRef}
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            ref={this.inputPasswordRef}
          />
          <button className="btn btn-info btn-block my-4" type="submit">
            Sign in
          </button>
          <p>
            Not a member?
            <Link to="/registration">Register</Link>
          </p>
        </form>
      </>
    );
  }
}
