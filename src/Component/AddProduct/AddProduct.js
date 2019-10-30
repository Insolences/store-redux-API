import React from "react";
import s from "./AddProduct.module.css";
import { Input } from "../Input";
import { Redirect } from "react-router";

export class AddProduct extends React.Component {
  state = {
    inStock: "true",
    redirect: false,
    errors: {},
    category: {
      id: 1
    }
  };

  inputTitleRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();
  inputUrlRef = React.createRef();
  inputCategoryRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let product = {
      category: this.state.category,
      title: this.inputTitleRef.current.value,
      image: this.inputUrlRef.current.value,
      price: parseInt(this.inputPriceRef.current.value),
      quantity: parseInt(this.inputQuantityRef.current.value),
      inStock: this.state.inStock === "true"
    };
    this.props.addProductEvent(product).then(res => {
      if (res.status !== 200) {
        this.setState({
          errors: res.body.errors
        });
      } else
        this.setState({
          errors: {}
        });
    });
    this.inputTitleRef.current.value = "";
    this.inputPriceRef.current.value = "";
    this.inputQuantityRef.current.value = "";
  };

  showErrors = errorKey => {
    if (this.state.errors[errorKey]) {
      return (
        <div className="error alert-danger text-center d-flex flex-column">
          {this.state.errors[errorKey].map(el => (
            <span>{el}</span>
          ))}
        </div>
      );
    }
    return null;
  };

  handleOptionChange = e => {
    this.setState({
      inStock: e.target.value
    });
  };

  renderForm = () => {
    return (
      <form className={s.card}>
        <div className="card-body">
          <h5 className="card-title">
            Product img url: <Input type="text" ref={this.inputUrlRef} />
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          {this.showErrors("title")}
          <li className="list-group-item">
            <h5>
              Card title:{" "}
              <Input type="text" ref={this.inputTitleRef} required />
            </h5>
          </li>
          {this.showErrors("price")}
          <li className="list-group-item">
            Price:{" "}
            <Input
              type="number"
              ref={this.inputPriceRef}
              pattern="\d+"
              required
            />
          </li>
          <li className="list-group-item">
            Quantity:{" "}
            <Input
              type="number"
              ref={this.inputQuantityRef}
              pattern="\d+"
              required
            />
          </li>
        </ul>
        <div className={`${"form-check "} ${s.radioCheck}`}>
          <div>
            <p>STATUS:</p>
            <Input
              name="in_stock"
              type="radio"
              value="true"
              checked={this.state.inStock === "true"}
              onChange={this.handleOptionChange}
            />
            In Stock
          </div>
          <p>
            <Input
              name="in_stock"
              type="radio"
              value="false"
              checked={this.state.inStock === "false"}
              onChange={this.handleOptionChange}
            />
            Not in Stock
          </p>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option>Phone</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
      </form>
    );
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/admin" />;
    }
    return (
      <>
        <h2 className={s.h2}>Add Product</h2>
        <div className={s.addCard}>{this.renderForm()}</div>
      </>
    );
  }
}
