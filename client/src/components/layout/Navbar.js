import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
import { logout } from "../../actions/auth";
import { clearCurrentProfile } from "../../actions/profileActions";
import Header from "../../images/header_footer_rect.png";
class Navbar extends Component {
  state = {
    navbarDisplay: "Hidden"
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
   this.props.logout();
  };

  showNavbar = () => {
    if (this.state.navbarDisplay === "Hidden") {
      this.setState({
        navbarDisplay: ""
      });
    } else {
      this.setState({
        navbarDisplay: "Hidden"
      });
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <div className="DashboardLink">
          <div className="CenteredPlus">
            <Link className="BlackText" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="LogoutLink">
          <div className="CenteredPlus">
            <a href="" onClick={this.onLogoutClick} className="BlackText">
              Logout
            </a>
          </div>
        </div>
      </div>
    );

    const hiddenAuthLinks = (
      <div>
        <div className="DashboardLinkNavbar">
          <div className="CenteredImage">
            <Link className="BlackText" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="LogoutLinkNavbar">
          <div className="CenteredImage">
            <a href="" onClick={this.onLogoutClick} className="BlackText">
              Logout
            </a>
          </div>
        </div>
      </div>
    );

    const guestLinks = (
      <div>
        <div className="DashboardLink">
          <div className="CenteredPlus">
            <Link className="BlackText" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="LogoutLink">
          <div className="CenteredPlus">
            <Link className="BlackText" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );

    const hiddenGuestLinks = (
      <div>
        <div className="DashboardLinkNavbar">
          <div className="CenteredImage">
            <Link className="BlackText" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="LogoutLinkNavbar">
          <div className="CenteredImage">
            <Link className="BlackText" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <header className="WebsiteHeader">
        <div className="ImageFill">
          <img src={Header} alt="" className="ImageFill" />
        </div>
        <Link className="DMKitLogo" to="/">
          <div className="CenteredPlus">DMKit</div>
        </Link>

        <div className="NavbarLines" onClick={this.showNavbar}>
          <div className="CenteredImage">
            <i className="fa fa-bars" />
          </div>
          <div className={`NavbarHiddenLinks ${this.state.navbarDisplay}`}>
            <div className="NavbarTriangle" />
            {isAuthenticated ? hiddenAuthLinks : hiddenGuestLinks}
          </div>
        </div>

        <div className="HeaderLinksHolder">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </header>
    );
  }
}
Navbar.propTypes = {
 // logoutUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {  clearCurrentProfile,logout }
)(Navbar);
