import React from "react";
import { Link } from "react-router-dom";
import {ProductList} from "../ProductsList";

export class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <Link to="/login" className="text-info align-self-center ml-2 auth-modal-toggle waves-effect waves-light">Sign In</Link>
          <Link to="/registration" className = "btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle"> SIGN UP</Link>
        </div>
        <ProductList isAdmin={false} />
      </>
    )
  }
}
