import React from "react";
import { Redirect } from "react-router-dom";
import s from "./Edit.module.css";
import { Navigation } from "../Navigation/Navigation";
import { Input } from "../Input";

export class Edit extends React.Component {
  state = {
    products: {},
    inStock: "true",
    redirect: false,
    errors: {}
  };

  inputTitleRef = React.createRef();
  inputIdRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();
  inputUrlRef = React.createRef();

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.getProductEvent(id).then(res => {
      if (res.status !== 200) {
        alert("ERROR");
      } else
        this.setState({
          products: res.body
        });
    });
  }

  handleOptionChange = e => {
    this.setState({
      inStock: e.target.value
    });
  };

  handleClick = async e => {
    e.preventDefault();
    let product = {
      title: this.inputTitleRef.current.value,
      image: this.inputUrlRef.current.value,
      id: parseInt(this.inputIdRef.current.value),
      price: parseInt(this.inputPriceRef.current.value),
      quantity: parseInt(this.inputQuantityRef.current.value),
      inStock: this.state.inStock === "true"
    };
    const id = parseInt(this.props.match.params.id);
    this.props.editProductEvent(id, product).then(res => {
      if (res.status !== 200) {
        this.setState({
          errors: res.body.errors
        });
      } else
        this.setState({
          errors: {},
          redirect: true
        });
    });
  };

  showErrors = errorKey => {
    if (this.state.errors[errorKey]) {
      return (
        <div className="error alert-danger">
          {this.state.errors[errorKey].map(el => (
            <p className={s.errors}>{el}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/admin" />;
    }
    const { title, image, id, quantity, price } = this.state.products;
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Edit Product</h2>
        <div className={s.editCard}>
          <form className={s.card}>
            <div className="card-body">
              <h5 className="card-title">
                Product url:{" "}
                <Input
                  ref={this.inputUrlRef}
                  type="text"
                  defaultValue={image}
                />
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.showErrors("title")}
              <li className="list-group-item">
                <h5>
                  Card title:{" "}
                  <Input
                    ref={this.inputTitleRef}
                    type="text"
                    defaultValue={title}
                  />
                </h5>
              </li>
              <li className="list-group-item">
                ID:{" "}
                <Input
                  ref={this.inputIdRef}
                  type="text"
                  disabled="true"
                  defaultValue={id}
                />
              </li>
              {this.showErrors("price")}
              <li className="list-group-item">
                Price:{" "}
                <Input
                  ref={this.inputPriceRef}
                  type="number"
                  defaultValue={price}
                />
              </li>
              <li className="list-group-item">
                Quantity:{" "}
                <Input
                  ref={this.inputQuantityRef}
                  type="number"
                  defaultValue={quantity}
                />
              </li>
            </ul>
            <div className={`${"form-check "} ${s.radioCheck}`}>
              <div>
                <p>STATUS:</p>
                <input
                  name="In_Stock"
                  type="radio"
                  value="true"
                  checked={this.state.inStock === "true"}
                  onChange={this.handleOptionChange}
                />
                In Stock
              </div>
              <p>
                <Input
                  name="In_Stock"
                  type="radio"
                  value="false"
                  checked={this.state.inStock === "false"}
                  onChange={this.handleOptionChange}
                />
                Not in Stock
              </p>
            </div>
            <div className="card-body">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleClick}
              >
                EDIT
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
