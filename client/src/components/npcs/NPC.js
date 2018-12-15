import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deleteNPC } from "../../actions/profileActions";
import { connect } from "react-redux";
import Page from "../../images/page1.png";
import BlueX from "../../images/blue_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/npc_default_image.png";

class NPC extends Component {
  state = {
    hovered: false
  };
  deleteNPC = () => {
    this.props.deleteNPC(this.props.npc._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { npc } = this.props;
    let image;
    if (npc.image !== "") {
      image = (
        <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
      );
    } else {
      image = (
        <img className="ViewPageDisplayImage" src={DefaultImage} alt="npc" />
      );
    }
    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={BlueX}
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
          <div className="CenteredPlus">{npc.name}</div>
        </div>

        <Link
          to={`/npcs/${npc._id}`}
          className="ViewPageDisplayViewButton ViewNPCsColors BlackText"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div onClick={this.deleteNPC} className="ViewPageDisplayDeleteButton">
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

NPC.propTypes = {
  npc: PropTypes.object.isRequired,
  deleteNPC: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteNPC }
)(withRouter(NPC));
