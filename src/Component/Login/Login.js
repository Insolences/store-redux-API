import React from "react";
import { Link } from "react-router-dom";
export default class Login extends React.Component {

  render() {
    return (
      <form className="text-center border border-light p-5">
        <p className="h4 mb-4">Sign in</p>
        <input type="email"  className="form-control mb-4" placeholder="E-mail"/>
        <input type="password"  className="form-control mb-4" placeholder="Password"/>
        <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
        <p>Not a member?
          <Link to='/registration'>Register</Link>
        </p>
      </form>
    );
  }
}
