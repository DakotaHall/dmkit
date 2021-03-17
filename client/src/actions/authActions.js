import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import api from '../utils/api';
import { setAlert } from './alert';
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER,REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  api
    .post("/users/register", userData)
    .then(() => {
      let user = {
        email: userData.email,
        password: userData.password
      };
      dispatch(loginUser(user));
    })
    .catch(err =>
      
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get User Token
export const loginUser = userData => dispatch => {
  api
    .post("/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      window.location = "/dashboard";
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}).then((window.location = "/login")));
};
