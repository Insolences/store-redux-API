import React from "react";
import { Link, Redirect } from "react-router-dom";
import { API } from "../../Service/API";

export class Login extends React.Component {
  state = {
    redirect: false
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  loginHandler = async () => {
    let res = await API.login(
      this.emailRef.current.value,
      this.passwordRef.current.value
    );

    if (res.status !== 200) {
      this.props.showErrorEvent("Bad credentials");
    } else {
      API.tryRestoreSession();
      this.props.showNotificationEvent("You success logged");
      this.setState({
        redirect: true
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <>
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Sign in</p>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="E-mail"
            ref={this.emailRef}
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            ref={this.passwordRef}
          />
          <button
            className="btn btn-info btn-block my-4"
            type="button"
            onClick={this.loginHandler}
          >
            Sign in
          </button>
          <p>
            Not a member?
            <Link to="/registration">Register</Link>
          </p>
        </form>
      </>
    );
  }
}
