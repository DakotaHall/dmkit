import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deleteQuest } from "../../actions/profileActions";
import { connect } from "react-redux";
import Page from "../../images/page1.png";
import OrangeX from "../../images/orange_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/quest_default_image.png";
class Quest extends Component {
  state = {
    hovered: false
  };
  deleteQuest = () => {
    this.props.deleteQuest(this.props.quest._id);
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { quest } = this.props;
    let image;
    if (quest.image !== "") {
      image = (
        <img className="ViewPageDisplayImage" src={quest.image} alt="quest" />
      );
    } else {
      image = (
        <img className="ViewPageDisplayImage" src={DefaultImage} alt="quest" />
      );
    }
    let XImage;
    if (this.state.hovered === false) {
      XImage = (
        <img
          src={OrangeX}
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
          <div className="CenteredPlus">{quest.name}</div>
        </div>

        <Link
          to={`/quests/${quest._id}`}
          className="ViewPageDisplayViewButton ViewQuestsColors"
        >
          <div className="CenteredPlusNoColor">View</div>
        </Link>
        <div onClick={this.deleteQuest} className="ViewPageDisplayDeleteButton">
          <div className="ImageFill">{XImage}</div>
        </div>
      </div>
    );
  }
}

Quest.propTypes = {
  quest: PropTypes.object.isRequired,
  deleteQuest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteQuest }
)(withRouter(Quest));
