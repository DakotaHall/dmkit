import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import NPC from "./NPC";
import Book from "../../images/book_dmkit_cropped.png";
import ArrowRight from "../../images/blue_arrow_right.png";
import ArrowLeft from "../../images/blue_arrow_left.png";
import BluePlus from "../../images/blue_plus_button.png";
import GrayPlus from "../../images/gray_plus_button.png";

class NPCs extends Component {
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

    let addNPCDisplay;
    let npcs = [];
    let bookDisplay = [];
    let displayIndex = this.state.displayIndex;
    let leftSide = [];
    let rightSide = [];
    let plusImage;
    if (this.state.hovered === false) {
      plusImage = (
        <img
          src={BluePlus}
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
    let addNPC = (
      <Link key="CreateNPC" to="/create-npc" className="ViewPageAddButton">
        <div className="AddTextCreateSettlement">Create New NPC</div>
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
      if (profile.NPCs.length > 0) {
        if (profile.NPCs.length >= 108) {
          addNPCDisplay = <div className="Hidden" />;
        } else {
          addNPCDisplay = addNPC;
        }
        npcs = profile.NPCs.map(npc => <NPC key={npc._id} npc={npc} />);
        npcs.unshift(addNPCDisplay);
        for (let i = 0; i < npcs.length; i++) {
          bookDisplay.push(npcs[i]);
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
        leftSide.push(addNPC);
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
          {leftArrow}
          {rightArrow}
          <div className="BookPages">
            <div className={this.state.bookPageLeft}>{leftSide}</div>
            <div className={this.state.bookPageRight}>{rightSide}</div>
          </div>
        </div>
      );
    }
  }
}

NPCs.propTypes = {
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
)(NPCs);
