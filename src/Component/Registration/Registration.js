import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navigation } from "../Navigation";
import { API } from "../../Service/API";

export default class Registration extends React.Component {
  state = {
    redirect: false,
    errors: {}
  };

  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();
  confirmPasswordRef = React.createRef();

  singUpHandler = async () => {
    let user = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
      confirmPassword: this.confirmPasswordRef.current.value
    };
    await API.singUp(user).then(res => {
      if (res.status !== 200) {
        this.setState({
          errors: res.body.errors
        });
      } else
        this.setState({
          redirect: true,
          errors: {}
        });
    });
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

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <>
        <Navigation />
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Sign up</p>
          <div className="form-row mb-4">
            {this.showErrors("firstName")}
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                ref={this.firstNameRef}
              />
            </div>
            {this.showErrors("lastName")}
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                ref={this.lastNameRef}
              />
            </div>
          </div>
          {this.showErrors("email")}
          <input
            type="email"
            className="form-control mb-4"
            placeholder="E-mail"
            ref={this.emailRef}
          />
          {this.showErrors("password")}
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            ref={this.passwordRef}
          />
          <input
            type="confirmPassword"
            className="form-control mb-4"
            placeholder="Confirm password"
            ref={this.confirmPasswordRef}
          />
          <button
            className="btn btn-info my-4 btn-block"
            type="button"
            onClick={this.singUpHandler}
          >
            Registration
          </button>
          <p>
            Have account?
            <Link to="/login">Sign in</Link>
          </p>
        </form>
      </>
    );
  }
}
