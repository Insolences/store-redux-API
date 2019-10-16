import React from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../ProductsList";

export class Home extends React.Component {
  state = {
    user: this.props.user
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <div>
          <Link to="/login" className="text-info align-self-center">
            Sign In
          </Link>
          <Link to="/registration" className="btn btn-info">
            {" "}
            SIGN UP
          </Link>
        </div>
        <ProductList isAdmin={false} />
      </>
    );
  }
}
