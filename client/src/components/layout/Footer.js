import React, { Component } from "react";
import FooterImage from "../../images/header_footer_rect.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openGamingLicense } from "../../actions/profileActions";

class Footer extends Component {
  followLink = (e, site) => {
    if (
      !window.confirm(
        "Are you sure you want to leave this page? Unsaved changes will be lost."
      )
    ) {
      e.preventDefault();
    }
  };

  render() {
    return (
      <div className="myFooter">
        <div className="ImageFill">
          <img src={FooterImage} alt="" className="ImageFill" />
        </div>
        <div className="CopyrightText">
          <div className="CenteredNoPointer">
            Copyright &copy; {new Date().getFullYear()} Dakota Hall
          </div>
        </div>
        <div
          key="OpenGamingLicenseLink"
          className="OpenGamingLicenseLink"
          onClick={this.props.openGamingLicense}
        >
          <div className="CenteredImage">
            * Content belongs to 5e SRD. Open Gaming License
          </div>
        </div>
        <div className="ArtistCredit">
          <div className="CenteredImageNoPointer">
            All art created by{" "}
            <a
              href="https://yasmeenleclerc.myportfolio.com/"
              onClick={this.followLink}
              className="BlackText"
            >
              <strong className="CursorPointer">Yasmeen Leclerc</strong>
            </a>{" "}
            <a
              href="https://www.instagram.com/y.scribe/"
              onClick={this.followLink}
              className="BlackText"
            >
              <i className="fab fa-instagram CursorPointer" />
            </a>{" "}
            <a
              href="https://www.behance.net/yasmeen_lee71f"
              onClick={this.followLink}
              className="BlackText"
            >
              <i className="fab fa-behance CursorPointer" />
            </a>{" "}
            <a
              href="https://www.deviantart.com/yscribes"
              onClick={this.followLink}
              className="BlackText"
            >
              <i className="fab fa-deviantart CursorPointer" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

Footer.propTypes = {
  openGamingLicense: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { openGamingLicense }
)(Footer);
