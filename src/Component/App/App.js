import React from "react";
import { Admin } from "../Admin";
import { Home } from "../Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddProduct } from "../AddProduct";
import { Edit } from "../Edit";
import { Details } from "../Details";
import { AppContext } from "../../Context";

export default class App extends React.Component {
  render() {
    return (
      <AppContext.Provider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" exact component={AddProduct} />
          <Route path="/home/details/:id" exact component={Details} />
          <Route path="/admin/product/edit/:id" exact component={Edit} />
        </Router>
      </AppContext.Provider>
    );
  }
}
