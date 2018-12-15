import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSettlement } from "../../actions/profileActions";
import Page from "../../images/page1.png";
import GreenX from "../../images/green_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/settlement_default_image.png";
class Settlement extends Component {
  state = {
    hovered: false
  };
  deleteSettlement = () => {
    this.props.deleteSettlement(this.props.settlement._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { settlement } = this.props;
    let image;
    if (settlement.image !== "") {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={settlement.image}
          alt="settlement"
        />
      );
    } else {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={DefaultImage}
          alt="settlement"
        />
      );
    }
    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={GreenX}
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
          <div className="CenteredPlus">{settlement.name}</div>
        </div>

        <Link
          to={`/settlements/${settlement._id}`}
          className="ViewPageDisplayViewButton ViewSettlementsColors BlackText"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div
          onClick={this.deleteSettlement}
          className="ViewPageDisplayDeleteButton"
        >
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

Settlement.propTypes = {
  settlement: PropTypes.object.isRequired,
  deleteSettlement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteSettlement }
)(withRouter(Settlement));
