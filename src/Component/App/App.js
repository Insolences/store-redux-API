import React from "react";
import { Admin } from "../Admin";
import { Home } from "../Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddProduct } from "../AddProduct";
import { Edit } from "../Edit";
import { Details } from "../Details";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { Notification } from "../Notification";
import { API } from "../../Service/API";

export default class App extends React.Component {
  componentDidMount() {
    API.tryRestoreSession();
  }

  render() {
    return (
      <>
        <Notification />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path={"/registration"} exact component={Registration} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" exact component={AddProduct} />
          <Route path="/home/details/:id" exact component={Details} />
          <Route path="/admin/product/edit/:id" exact component={Edit} />
        </Router>
      </>
    );
  }
}
