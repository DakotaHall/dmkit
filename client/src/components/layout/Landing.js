import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const Landing = ({isAuthenticated}) => {
  if(isAuthenticated){
    return <Redirect to="/dashboard" />;
  }


    return (
      <div className="landing">
        <div className="LandingHeader">DM Kit</div>
        <p className="LandingText">
          {" "}
          Create and manage your own characters, monsters, encounters,
          settlements, and quests for your roleplaying games!
        </p>
        <hr />
        <Link to="/register" className="LandingSignUp">
          <div className="CenteredPlusNoColor">Sign Up</div>
        </Link>
        <Link to="/login" className="LandingLogin">
          <div className="CenteredPlusNoColor">Login</div>
        </Link>
      </div>
    );
  
}
Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
