import React from "react";
import s from "./Details.module.css";
import img from "../../qwe.jpg";
import { Navigation } from "../Navigation/Navigation";
import { API } from "../API";

export default class Details extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    API.getProduct(id).then(res => {
      if (res.status !== 200) {
        alert("Что то пошло не так");
      }
      this.setState({
        product: res.body
      });
    });
  }

  renderImg = () => {
    return this.state.product.image ? (
      <img
        src={this.state.product.image}
        className={`${"card-img-top "}`}
        alt="qwe"
      />
    ) : (
      <img src={img} className={`${"card-img-top "}`} alt="qwe" />
    );
  };

  render() {
    const { title, price, id, quantity, inStock } = this.state.product;
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Details</h2>
        <div className={`${"card "} ${s.card}`}>
          {this.renderImg()}
          <div className={`${"card-body "} ${s.body}`}>
            <h5 className="card-title">Title: {title}</h5>
          </div>
          <ul className={`${"list-group list-group-flush"} ${s.list}`}>
            <li className="list-group-item">ID: {id}</li>
            <li className="list-group-item">Price: {price} $</li>
            <li className="list-group-item">Quantity: {quantity}</li>
            <li className="list-group-item">
              Status: {inStock ? "In Stock" : "Not in Stock"}
            </li>
          </ul>
        </div>
      </>
    );
  }
}
