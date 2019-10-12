import React from "react";
import { Link } from "react-router-dom";
import img from "../../qwe.jpg";
import s from "./Product.module.css";
import { Redirect } from "react-router";

export class Product extends React.Component {
  state = {
    products: this.props.product,
    redirect: false
  };

  componentDidMount() {
    this.setState({
      products: this.props.product
    });
  }

  handlerClickToDelete = e => {
    e.preventDefault();
    let id = this.state.products.id;
    this.props.ToDelete(id);
  };

  renderImg = () => {
    const { image } = this.props.product;

    return image ? (
      <img src={image} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    ) : (
      <img src={img} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    );
  };

  renderButtons = () => {
    const { id } = this.props.product;

    if (this.props.isAdmin) {
      {
        return (
          <div className="card-body">
            <Link to={`/admin/product/edit/${id}`}>
              <button type="button" className="btn btn-success">
                Edit
              </button>
            </Link>
            <Link to={`/admin`}>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.handlerClickToDelete}
              >
                Delete
              </button>
            </Link>
          </div>
        );
      }
    } else
      return (
        <div className="card-body">
          <Link to={`/home/details/${id}`}>
            <button type="button" className="btn btn-info">
              Details
            </button>
          </Link>
        </div>
      );
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/admin" />;
    }
    const { id, inStock, title, price, quantity } = this.props.product;

    return (
      <div className={s.card}>
        {/*<div className={`${inStock ? " " : s.cardIsEmpty}`} />*/}
        {this.renderImg()}
        <div className="card-body">
          <h5 className="card-title">Title:{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Price: {price} $</li>
          <li className="list-group-item">Quantity: {quantity}</li>
        </ul>
        <div className={`${"form-check "} ${s.radioCheck}`}>
          <p>Status: {inStock ? "In Stock" : "Not in Stock"}</p>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}
