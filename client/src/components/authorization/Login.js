import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <h1 className="SignUpText">Log In</h1>
        <form onSubmit={this.onSubmit}>
          <div className="EmailText">Email Address</div>
          <div className="EmailInputHolder">
            <input
              className={classnames("EmailInput", {
                InvalidInput: errors.email
              })}
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              maxLength="200"
            />
            {errors.email && <div className="FormError">{errors.email}</div>}
          </div>

          <div className="PasswordText">Password</div>
          <div className="PasswordInputHolder">
            <input
              className={classnames("EmailInput", {
                InvalidInput: errors.password
              })}
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              maxLength="100"
            />
            {errors.password && (
              <div className="FormError">{errors.password}</div>
            )}
          </div>
          <input type="submit" value="Login" className="LoginSubmit" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
