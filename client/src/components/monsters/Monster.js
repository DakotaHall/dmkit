import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deleteMonster } from "../../actions/profileActions";
import { connect } from "react-redux";
import Page from "../../images/page1.png";
import PurpleX from "../../images/purple_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/monster_default_image.png";

class Monster extends Component {
  state = {
    hovered: false
  };
  deleteMonster = () => {
    this.props.deleteMonster(this.props.monster._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { monster } = this.props;
    let image;
    if (monster.image !== "" && monster.image !== undefined) {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={monster.image}
          alt="monster"
        />
      );
    } else {
      image = (
        <img
          className="ViewPageDisplayImage"
          src={DefaultImage}
          alt="monster"
        />
      );
    }
    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={PurpleX}
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
          <div className="CenteredPlus">{monster.name}</div>
        </div>

        <Link
          to={`/monsters/${monster._id}`}
          className="ViewPageDisplayViewButton ViewMonstersColors BlackText"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div
          onClick={this.deleteMonster}
          className="ViewPageDisplayDeleteButton"
        >
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

Monster.propTypes = {
  monster: PropTypes.object.isRequired,
  deleteMonster: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteMonster }
)(withRouter(Monster));
