import React from "react";
import { ProductList } from "../ProductsList";

export class Home extends React.Component {
  render() {
    return <ProductList isAdmin={false} />;
  }
}
