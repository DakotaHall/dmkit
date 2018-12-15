import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <h1 className="LandingHeader">DM Kit</h1>
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
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
