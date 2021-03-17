import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import classnames from "classnames";
const Login = ({ login, isAuthenticated,errors }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errors: {}
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login">
      <h1 className="SignUpText">Log In</h1>
      {/* <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p> */}
      <form onSubmit={onSubmit}>
        <div className="EmailText">Email Address</div>
        <div className="EmailInputHolder">
          <input
            className={classnames("EmailInput", {
              InvalidInput: errors.email
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
         {errors.email && <div className="FormError">{errors.email}</div>}
        </div>
        <div className="PasswordText">Password</div>
        <div className="PasswordInputHolder">
          <input
          className={classnames("EmailInput", {
            InvalidInput: errors.password
          })}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
          {errors.password && (
              <div className="FormError">{errors.password}</div>
            )}
        </div>
        <input type="submit" className="LoginSubmit" value="Login" />
      </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
});

export default connect(mapStateToProps, { login })(Login);
