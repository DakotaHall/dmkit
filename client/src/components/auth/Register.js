import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import classnames from "classnames";

const Register = ({ setAlert, register, isAuthenticated,errors }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    errors:{}
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
      register({ email, password,password2 });
    
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  //const { errors } = this.state;
  return (
    <Fragment>
      <div className="myForm">
      <h1 className="SignUpText">Sign Up</h1>
      <form  onSubmit={onSubmit}>
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
          />
          {errors.password && (
              <div className="FormError">{errors.password}</div>
            )}
        </div>
        <div className="PasswordText2">Password</div>
        <div className="PasswordInput2Holder">
          <input
          className={classnames("EmailInput", {
            InvalidInput: errors.password2
          })}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          {errors.password2 && (
              <div className="FormError">{errors.password2}</div>
            )}
        </div>
        <input type="submit" className="SignUpSubmit" value="Register" />
      </form>
     
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors
});

export default connect(mapStateToProps, { setAlert, register })(Register);
