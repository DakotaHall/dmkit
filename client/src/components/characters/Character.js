import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deleteCharacter } from "../../actions/profileActions";
import { connect } from "react-redux";
import Page from "../../images/page1.png";
import RedX from "../../images/red_x1.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/character_default_image.png";

class Character extends Component {
  state = {
    hovered: false
  };
  deleteCharacter = () => {
    this.props.deleteCharacter(this.props.character._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { character } = this.props;
    let image;
    if (character.image !== "") {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={character.image}
          alt="character"
        />
      );
    } else {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={DefaultImage}
          alt="character"
        />
      );
    }

    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={RedX}
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
          <img src={Page} alt={""} className="ImageFill" />
        </div>
        <div className="ViewPageDisplayImageHolder">{image}</div>

        <div className="ViewPageDisplayName">
          <div className="CenteredPlus">{character.name}</div>
        </div>

        <Link
          to={`/characters/${character._id}`}
          className="ViewPageDisplayViewButton ViewCharactersColors"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div
          onClick={this.deleteCharacter}
          className="ViewPageDisplayDeleteButton"
        >
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  deleteCharacter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteCharacter }
)(withRouter(Character));
