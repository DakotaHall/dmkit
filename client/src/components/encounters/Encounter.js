import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deleteEncounter } from "../../actions/profileActions";
import { connect } from "react-redux";
import Page from "../../images/page1.png";
import YellowX from "../../images/yellow_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/encounter_default_image.png";

class Encounter extends Component {
  state = {
    hovered: false
  };
  deleteEncounter = () => {
    this.props.deleteEncounter(this.props.encounter._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { encounter } = this.props;
    let image;
    if (encounter.image === undefined) {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={DefaultImage}
          alt="encounter"
        />
      );
    } else {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={DefaultImage}
          alt="encounter"
        />
      );
    }
    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={YellowX}
          alt="+"
          className="ImageFill"
          onMouseEnter={this.changeX}
        />
      );
    } else {
      XImage = (
        <img
          src={GrayX}
          alt="+"
          className="ImageFill"
          onMouseLeave={this.changeX}
        />
      );
    }
    return (
      <div className="ViewPageCharacter">
        <div className="ViewPageBackgroundImage">
          <img src={Page} alt="" className="ImageFill" />
        </div>
        <div className="ViewPageDisplayImageHolder">{image}</div>

        <div className="ViewPageDisplayName">
          <div className="CenteredPlus">{encounter.title}</div>
        </div>

        <Link
          to={`/encounters/${encounter._id}`}
          className="ViewPageDisplayViewButton  ViewEncountersColors"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div
          onClick={this.deleteEncounter}
          className="ViewPageDisplayDeleteButton"
        >
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

Encounter.propTypes = {
  encounter: PropTypes.object.isRequired,
  deleteEncounter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteEncounter }
)(withRouter(Encounter));
