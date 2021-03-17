import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Monster from "./Monster";
import Book from "../../images/book_dmkit_cropped.png";
import ArrowRight from "../../images/purple_arrow_right.png";
import ArrowLeft from "../../images/purple_arrow_left.png";
import PurplePlus from "../../images/purple_plus_button.png";
import GrayPlus from "../../images/gray_plus_button.png";

class Monsters extends Component {
  state = {
    displayIndex: 0,
    arrowRight: "ArrowRightBook",
    arrowLeft: "ArrowLeftBook",
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false
  };

  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  arrowRight = length => {
    let index;
    if (this.state.displayIndex + 18 > length) {
      index = this.state.displayIndex;
    } else {
      index = this.state.displayIndex + 18;
    }
    this.setState({ displayIndex: index }, () => {});
  };

  arrowLeft = () => {
    let index;
    if (this.state.displayIndex - 18 < 0) {
      index = 0;
    } else {
      index = this.state.displayIndex - 18;
    }
    this.setState({ displayIndex: index }, () => {});
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const { profile, loading } = this.props.profile;

    let addMonsterDisplay;
    let monsters = [];
    let bookDisplay = [];
    let displayIndex = this.state.displayIndex;
    let leftSide = [];
    let rightSide = [];
    let plusImage;
    if (this.state.hovered === false) {
      plusImage = (
        <img
          src={PurplePlus}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseEnter={this.changePlus}
        />
      );
    } else {
      plusImage = (
        <img
          src={GrayPlus}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseLeave={this.changePlus}
        />
      );
    }
    let addMonster = (
      <Link
        key="CreateMonster"
        to="/create-monster"
        className="ViewPageAddButton"
      >
        <div className="AddTextCreateSettlement">Create New Monster</div>
        <div className="LowerCenteredImageHolder">
          <div className="LowerCenteredImage">
            <div className="CenteredImage">{plusImage}</div>
          </div>
        </div>
      </Link>
    );

    if (profile === null || loading) {
      return <Spinner />;
    } else {
      if (profile.monsters.length > 0) {
        if (profile.monsters.length >= 450) {
          addMonsterDisplay = <div className="Hidden" />;
        } else {
          addMonsterDisplay = addMonster;
        }
        monsters = profile.monsters.map(monster => (
          <Monster key={monster._id} monster={monster} />
        ));
        monsters.unshift(addMonsterDisplay);

        for (let i = 0; i < monsters.length; i++) {
          bookDisplay.push(monsters[i]);
        }

        if (bookDisplay.length < 18) {
          for (let i = 0; i < bookDisplay.length; i++) {
            if (i < 9) {
              leftSide.push(bookDisplay[i]);
            } else {
              rightSide.push(bookDisplay[i]);
            }
          }
        } else {
          for (let i = 0; i < 18; i++) {
            if (Math.abs(displayIndex) >= bookDisplay.length) {
              displayIndex = 0;
            }
            let index = parseInt(displayIndex, 10);

            if (index + i >= bookDisplay.length) {
            } else if (index + i < 0) {
            } else {
              if (i < 9) {
                leftSide.push(bookDisplay[index + i]);
              } else {
                rightSide.push(bookDisplay[index + i]);
              }
            }
          }
        }
      } else {
        leftSide.push(addMonster);
      }

      let leftArrow;
      let rightArrow;

      if (this.state.displayIndex === 0) {
        leftArrow = null;
      } else {
        leftArrow = (
          <img
            src={ArrowLeft}
            className={this.state.arrowLeft}
            alt="left"
            onClick={this.arrowLeft}
          />
        );
      }
      if (bookDisplay.length < this.state.displayIndex + 19) {
        rightArrow = null;
      } else {
        rightArrow = (
          <img
            src={ArrowRight}
            className={this.state.arrowRight}
            alt="right"
            onClick={this.arrowRight.bind(this, bookDisplay.length)}
          />
        );
      }

      return (
        <div className="ViewPageHolder">
          <div className="BookHolder">
            <img src={Book} alt="" className="ImageFill" />
          </div>
          {rightArrow}
          {leftArrow}
          <div className="BookPages">
            <div className={this.state.bookPageLeft}>{leftSide}</div>
            <div className={this.state.bookPageRight}>{rightSide}</div>
          </div>
        </div>
      );
    }
  }
}

Monsters.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Monsters);
