import React from "react";
import { Admin } from "../Admin";
import { Home } from "../Home";
import { Router, Route } from "react-router-dom";
import { AddProduct } from "../AddProduct";
import { Edit } from "../Edit";
import { Details } from "../Details";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { Notification } from "../Notification";
import { CategoryList } from "../CategoryList/CategoryList";
import { API } from "../../Service/API";
import { history } from "../../Service/History";
import { Navigation } from "../Navigation";
import img from "./index.ajax-spinner-preloader.svg";
import s from "./App.module.css";

export class App extends React.Component {
  componentDidMount() {
    API.tryRestoreSession().finally(this.props.isInitEvent);
  }

  render() {
    if (!this.props.isInit) {
      return (
        <div>
          <img src={img} className={s.spinner} />
        </div>
      );
    }

    return (
      <>
        <Notification />
        <Router history={history}>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" exact component={AddProduct} />
          <Route path="/home/details/:id" exact component={Details} />
          <Route path="/admin/product/edit/:id" exact component={Edit} />
          <Route path="/category" exact component={CategoryList} />
        </Router>
      </>
    );
  }
}
