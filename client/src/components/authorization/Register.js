import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="myForm">
        <h1 className="SignUpText">Sign Up</h1>
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
          <div className="PasswordText2">Confirm Password</div>
          <div className="PasswordInput2Holder">
            <input
              className={classnames("EmailInput", {
                InvalidInput: errors.password2
              })}
              name="password2"
              type="password"
              onChange={this.onChange}
              value={this.state.password2}
              maxLength="100"
            />
            {errors.password2 && (
              <div className="FormError">{errors.password2}</div>
            )}
          </div>
          <input type="submit" value="Sign Up" className="SignUpSubmit" />
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
