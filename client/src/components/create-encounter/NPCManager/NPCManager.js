import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import PropTypes from "prop-types";
import WoodPlank from "../../../images/wood_plank.png";
import NPCRibbon from "../../../images/NPC_ribbon.png";
import ArrowRight from "../../../images/blue_arrow_right.png";
import ArrowLeft from "../../../images/blue_arrow_left.png";
import Book from "../../../images/book_dmkit_cropped.png";
import BluePlus from "../../../images/blue_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";
import BlueX from "../../../images/blue_x.png";
import GrayX from "../../../images/gray_x.png";
import GreenCheckmark from "../../../images/green_check_button.png";
import { noEncounterAddTutorial } from "../../../actions/profileActions";
import Wizard from "../../../images/booboo.png";

class NPCManager extends Component {
  state = {
    NPCs: this.props.NPCs,
    premadeNPCs: this.props.premadeNPCs,
    showNPCs: this.props.showNPCs,
    changed: false,
    npcDisplay: [],
    encounterNPCsSize: "EncounterNPCs",
    updatedNPCs: [],
    displayIndex: 0,
    slideshowIndex: 0,
    bookIndex: 0,
    arrowRight: "ArrowRight",
    arrowLeft: "ArrowLeft",
    headSection: "HeadSection",
    characterDisplay: "CharacterDisplay",
    ribbonDisplay: "CharacterHeaderRibbonSection",
    addNPCActive: false,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false,
    hoveredArray: [],
    greenCheckArray: [],
    xHovered: false,
    reset: false,
    timers: [],
    npcAddedText: <div className="Hidden" />,
    tutorialPane: 1,
    tutorialText:
      'Hey! Welcome to the "Add a NPC" section of the Encounter page! Both the "Add an NPC" and "Add a NPC" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
    showTutorial: false,
    tutorialPreviousDisplay: "Hidden",
    tutorialNextDisplay: "",
    neverShow: false,
    encounterTutorialPane: "Encounter3"
  };

  UNSAFE_componentWillMount = () => {
    let newHoveredArray = [];
    let newGreenCheckArray = [];
    for (let i = 0; i < this.state.premadeNPCs.length; i++) {
      let newHovered = {
        hovered: false
      };
      newHoveredArray.push(newHovered);
      let newGreenCheck = {
        greenCheck: false
      };
      newGreenCheckArray.push(newGreenCheck);
    }
    this.setState({
      hoveredArray: newHoveredArray,
      greenCheckArray: newGreenCheckArray
    });
  };

  arrowRight = () => {
    this.setState({ displayIndex: this.state.displayIndex + 1 }, () => {
      if (this.state.displayIndex >= this.props.NPCs.length) {
        this.setState({ displayIndex: 0 });
      }
    });
  };

  arrowLeft = () => {
    this.setState({ displayIndex: this.state.displayIndex - 1 }, () => {
      if (this.state.displayIndex < this.props.NPCs.length * -1 + 1) {
        this.setState({ displayIndex: 0 });
      }
    });
  };

  bookArrowRight = length => {
    let index;
    if (this.state.bookIndex + 18 > length) {
      index = this.state.bookIndex;
    } else {
      index = this.state.bookIndex + 18;
    }
    this.setState({ bookIndex: index }, () => {});
  };

  bookArrowLeft = () => {
    let index;
    if (this.state.bookIndex - 18 < 0) {
      index = 0;
    } else {
      index = this.state.bookIndex - 18;
    }
    this.setState({ bookIndex: index }, () => {});
  };

  allNPCTest = swag => {
    let oldState = this.state.updatedNPCs;
    oldState.push(swag);
    this.setState({ updatedNPCs: oldState });
  };

  changeNPC = (npcIndex, npcData) => {
    let oldState = this.state.updatedNPCs;
    oldState[npcIndex] = npcData;
    this.setState({ updatedNPCs: oldState });
  };

  addNPCDisplay = () => {
    this.setState({ addNPCActive: true });
  };

  closeNPCDisplay = () => {
    let hoveredArray = this.state.hoveredArray;
    let greenCheckArray = this.state.greenCheckArray;
    for (let i = 0; i < greenCheckArray.length; i++) {
      greenCheckArray[i].greenCheck = false;
      hoveredArray[i].hovered = false;
    }
    this.setState({
      addNPCActive: false,
      xHovered: false,
      showTutorial: false,
      hoveredArray: hoveredArray,
      greenCheckArray: greenCheckArray,
      npcAddedText: <div className="Hidden" />
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showNPCs !== prevProps.showNPCs) {
      this.setState(
        {
          showNPCs: this.props.showNPCs
        },
        () => {}
      );
    }
  }

  removeNPC = index => {
    this.props.removeNPC(index);
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };
  changeX = () => {
    if (this.state.xHovered === false) {
      this.setState({ xHovered: true });
    } else {
      this.setState({ xHovered: false });
    }
  };

  changeArrayPlus = index => {
    let newHoveredArray = this.state.hoveredArray;
    if (this.state.hoveredArray[index].hovered === true) {
      newHoveredArray[index].hovered = false;
    } else {
      newHoveredArray[index].hovered = true;
    }
    this.setState({ hoveredArray: newHoveredArray });
  };

  fadeText = index => {
    let timers = this.state.timers;
    timers.push(
      setTimeout(() => {
        let greenCheckArray = this.state.greenCheckArray;
        greenCheckArray[index].greenCheck = false;
        this.setState({
          npcAddedText: <div className="Hidden" />,
          greenCheckArray: greenCheckArray
        });
      }, 2500)
    );
    this.setState({ timers: timers });
  };

  fadeTextTwo = index => {
    let greenCheckArray = this.state.greenCheckArray;
    for (let i = 0; i < greenCheckArray.length; i++) {
      greenCheckArray[i].greenCheck = false;
    }
    greenCheckArray[index].greenCheck = true;

    clearTimeout(this.state.timers.pop());
    this.setState({ greenCheckArray: greenCheckArray }, () => {
      this.fadeText(index);
    });
  };

  addNPC = npc => {
    this.setState(
      {
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npc.name} successfully added to encounter NPCs!
            </div>
          </div>
        )
      },
      () => {
        let neededIndex = this.state.premadeNPCs.findIndex(
          x => x._id === npc._id
        );
        this.fadeTextTwo(neededIndex);
        this.props.addNPC(npc);
      }
    );
  };

  nextTutorialPane = () => {
    if (this.state.tutorialPane === 1) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each NPC has a button with a "+" on it. When this button is clicked, the NPC will be added to the NPCs section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the NPC has been added to the "NPCs" section.',
        tutorialPreviousDisplay: "",
        encounterTutorialPane: "Encounter3"
      });
    } else if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a NPC is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two NPCs with the same name are added, the last NPC added will have a number after its name. This number will increment for each copy of that NPC that is added. This persists even if one of the NPCs with the matching name is removed from the encounter. If you add 3 NPCs with the same name, the names will appear in both the "NPCs" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the NPC titled "Name" is removed, and then the same NPC is added again, the new NPC will have the title "Name 4".',
        encounterTutorialPane: "Encounter2"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 4,
        tutorialText:
          "Unlike the Settlement variation of adding NPCs, the changes you make to NPCs here will not affect other copies of the NPC, nor will it affect the original NPC referenced to create this one.",
        tutorialNextDisplay: "Hidden",
        encounterTutorialPane: "Encounter1"
      });
    } else {
      this.setState({
        showTutorial: false
      });
    }
  };

  previousTutorialPane = () => {
    if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 1,
        tutorialText:
          'Hey! Welcome to the "Add a NPC" section of the Encounter page! Both the "Add an NPC" and "Add a NPC" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
        tutorialPreviousDisplay: "Hidden",
        encounterTutorialPane: "Encounter3"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each NPC has a button with a "+" on it. When this button is clicked, the NPC will be added to the NPCs section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the NPC has been added to the "NPCs" section.',
        encounterTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 4) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a NPC is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two NPCs with the same name are added, the last NPC added will have a number after its name. This number will increment for each copy of that NPC that is added. This persists even if one of the NPCs with the matching name is removed from the encounter. If you add 3 NPCs with the same name, the names will appear in both the "NPCs" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the NPC titled "Name" is removed, and then the same NPC is added again, the new NPC will have the title "Name 4".',
        tutorialNextDisplay: "",
        encounterTutorialPane: "Encounter2"
      });
    } else {
      this.setState({
        showTutorial: false
      });
    }
  };

  showTutorial = () => {
    this.setState({ showTutorial: true });
  };

  hideTutorial = () => {
    if (this.state.neverShow) {
      this.setState({ showTutorial: false }, () => {
        this.disableEncounterAddTutorial();
      });
    } else {
      this.setState({ showTutorial: false }, () => {
        this.props.addTutorialOff();
      });
    }
  };

  disableEncounterAddTutorial = () => {
    this.props.noEncounterAddTutorial();
    this.props.addTutorialOff();
  };

  onChange = e => {
    if (e.target.name === "neverShow") {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const { loading, profile } = this.props.profile;
    let swag;

    if (this.state.NPCs === null || loading) {
      swag = <Spinner />;
    } else {
      if (this.state.NPCs.length > 0) {
      } else {
      }
    }
    let showTutorialPane;
    if (profile.encounter_add_tutorial !== false) {
      if (this.state.showTutorial && this.props.addTutorialShow) {
        showTutorialPane = (
          <div className="DarkOverlay">
            <div className="WizardHolder">
              <img className="ImageFill" src={Wizard} alt="" />
            </div>
            <div className="SettlementTutorialPaneTriangle" />
            <div className={this.state.encounterTutorialPane}>
              <div
                className="SettlementTutorialClose"
                onClick={this.hideTutorial}
              >
                <div className="CenteredPlusNoColor">X</div>
              </div>
              <div className="SettlementTutorialText">
                {this.state.tutorialText}
              </div>
              <div className="SettlementTutorialNumber">
                {this.state.tutorialPane} / 4
              </div>
              <div className="SettlementTutorialNextButton">
                <i
                  className={`fas fa-arrow-right ${
                    this.state.tutorialNextDisplay
                  }`}
                  onClick={this.nextTutorialPane}
                />
              </div>
              <div className="SettlementTutorialPreviousButton">
                <i
                  className={`fas fa-arrow-left ${
                    this.state.tutorialPreviousDisplay
                  }`}
                  onClick={this.previousTutorialPane}
                />
              </div>
              <div className="SettlementTutorialCheckboxHolder">
                <input
                  type="checkbox"
                  name="neverShow"
                  onChange={this.onChange}
                  className="SettlementTutorialCheckbox"
                />
                <div className="SettlementTutorialCheckboxText">
                  Don't show this tutorial again.
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        showTutorialPane = <div className="Hidden" />;
      }
    } else {
      showTutorialPane = <div className="Hidden" />;
    }

    let addNPC;
    let npcOptions = this.props.premadeNPCs.map((npc, index) => {
      let npcImage;
      if (npc.image !== null) {
        npcImage = npc.image;
      } else {
        npcImage = "../../../../images/npc_ribbon.png";
      }
      let plusImage;
      if (this.state.NPCs.length >= 50) {
        plusImage = (
          <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
        );
      } else if (this.state.greenCheckArray[index].greenCheck === true) {
        plusImage = (
          <img
            src={GreenCheckmark}
            alt="+"
            className="ImageFill"
            onClick={e => {
              e.preventDefault();
              this.addNPC(npc);
            }}
            onMouseLeave={() => {
              this.changeArrayPlus(index);
            }}
          />
        );
      } else if (this.state.hoveredArray[index].hovered === true) {
        plusImage = (
          <img
            src={GrayPlus}
            alt="+"
            className="ImageFill"
            onClick={e => {
              e.preventDefault();
              this.addNPC(npc);
            }}
            onMouseLeave={() => {
              this.changeArrayPlus(index);
            }}
          />
        );
      } else {
        plusImage = (
          <img
            src={BluePlus}
            alt="+"
            className="ImageFill"
            onMouseEnter={() => {
              this.changeArrayPlus(index);
            }}
          />
        );
      }
      return (
        <div
          key={`EncounterAddNPC${this.state.premadeNPCs.indexOf(npc)}`}
          className="ViewPageCharacter"
        >
          <div className="ViewPageDisplayImageHolder">
            <img src={npcImage} className="ViewPageDisplayImage" alt="NPC" />
          </div>

          <div className="ViewPageDisplayName">{npc.name}</div>

          <div className="LowerCenteredImageHolder">
            <div className="LowerCenteredImage">
              <div className="CenteredImage">{plusImage}</div>
            </div>
          </div>
        </div>
      );
    });

    let leftSide = [];
    let rightSide = [];
    let npcDisplay = [];
    let bookIndex = this.state.bookIndex;

    for (let i = 0; i < npcOptions.length; i++) {
      npcDisplay.push(npcOptions[i]);
    }

    if (npcDisplay.length < 18) {
      for (let i = 0; i < npcDisplay.length; i++) {
        if (i < 9) {
          leftSide.push(npcDisplay[i]);
        } else {
          rightSide.push(npcDisplay[i]);
        }
      }
    } else {
      for (let i = 0; i < 18; i++) {
        if (Math.abs(bookIndex) >= npcDisplay.length) {
          bookIndex = 0;
        }
        let index = parseInt(bookIndex, 10);

        if (index + i >= npcDisplay.length) {
        } else if (index + i < 0) {
        } else {
          if (i < 9) {
            leftSide.push(npcDisplay[index + i]);
          } else {
            rightSide.push(npcDisplay[index + i]);
          }
        }
      }
    }

    let leftArrow;
    let rightArrow;

    if (this.state.bookIndex === 0) {
      leftArrow = null;
    } else {
      leftArrow = (
        <img
          src={ArrowLeft}
          className="ArrowLeftBook"
          alt="left"
          onClick={this.bookArrowLeft}
        />
      );
    }
    if (npcDisplay.length < this.state.bookIndex + 19) {
      rightArrow = null;
    } else {
      rightArrow = (
        <img
          src={ArrowRight}
          className="ArrowRightBook"
          alt="right"
          onClick={this.bookArrowRight.bind(this, npcDisplay.length)}
        />
      );
    }
    let xImage;
    if (this.state.xHovered === false) {
      xImage = (
        <img
          src={BlueX}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseEnter={this.changeX}
        />
      );
    } else {
      xImage = (
        <img
          src={GrayX}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseLeave={this.changeX}
        />
      );
    }
    if (this.state.addNPCActive) {
      addNPC = (
        <div className="DarkOverlay">
          <div className="ViewPageHolder">
            <div className="BookHolder">
              <img src={Book} alt="" className="ImageFill" />
            </div>
            {leftArrow}
            {rightArrow}
            {showTutorialPane}
            {this.state.npcAddedText}
            <div className="BookPages">
              <div className="AddNPCCloseButton" onClick={this.closeNPCDisplay}>
                <div className="CenteredImage">{xImage}</div>
              </div>
              <div className={this.state.bookPageLeft}>{leftSide}</div>
              <div className={this.state.bookPageRight}>{rightSide}</div>
            </div>
          </div>
        </div>
      );
    } else {
      addNPC = <div />;
    }

    let displaySlideshowInfo = [];
    for (let i = 0; i < this.props.showNPCs.length; i++) {
      displaySlideshowInfo.push(this.state.showNPCs[i]);
    }
    let displaySlideshow = [];
    let displayIndex = this.state.displayIndex;
    if (displaySlideshowInfo.length < 3) {
      for (let i = 0; i < displaySlideshowInfo.length; i++) {
        displaySlideshow.push(displaySlideshowInfo[i]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        if (Math.abs(displayIndex) >= displaySlideshowInfo.length) {
          displayIndex = 0;
        }
        let index = parseInt(displayIndex, 10);

        if (index + i >= displaySlideshowInfo.length) {
          displaySlideshow.push(
            displaySlideshowInfo[index - displaySlideshowInfo.length + i]
          );
        } else if (index + i < 0) {
          displaySlideshow.push(
            displaySlideshowInfo[index + displaySlideshowInfo.length + i]
          );
        } else {
          displaySlideshow.push(displaySlideshowInfo[index + i]);
        }
      }
    }

    let slideshowArrowRight;
    let slideshowArrowLeft;
    if (displaySlideshow.length < 3) {
      slideshowArrowRight = <div className="Hidden" />;
      slideshowArrowLeft = <div className="Hidden" />;
    } else {
      slideshowArrowRight = (
        <img
          src={ArrowRight}
          alt="right"
          className={this.state.arrowRight}
          onClick={this.arrowRight}
        />
      );
      slideshowArrowLeft = (
        <img
          src={ArrowLeft}
          alt="left"
          className={this.state.arrowLeft}
          onClick={this.arrowLeft}
        />
      );
    }

    let plusImage;
    if (this.state.hovered === false) {
      plusImage = (
        <img
          src={BluePlus}
          alt="+"
          className="ImageFill"
          onMouseEnter={this.changePlus}
        />
      );
    } else {
      plusImage = (
        <img
          src={GrayPlus}
          alt="+"
          className="ImageFill"
          onMouseLeave={this.changePlus}
        />
      );
    }

    return (
      <div className="ImageFill">
        {addNPC}
        <div
          onMouseEnter={this.enterHandler}
          onMouseLeave={this.exitHandler}
          className={this.state.encounterNPCsSize}
        >
          {swag}
          {slideshowArrowLeft}
          {slideshowArrowRight}

          <div className={this.state.headSection}>
            <img src={WoodPlank} className="CharacterHeaderImage" alt="" />
            <div className={this.state.ribbonDisplay}>
              <img src={NPCRibbon} className="CharacterHeaderRibbon" alt="" />
            </div>
            <div className="HeaderText NPCHeaderColor">NPCS </div>
            <div
              className="EncounterMonstersAddMonsterButton"
              onClick={this.addNPCDisplay}
            >
              <div className="CenteredImage">
                <div className="ImageFill">{plusImage}</div>
              </div>
            </div>
          </div>
          <div className={this.state.characterDisplay}>{displaySlideshow}</div>
        </div>
      </div>
    );
  }
}

NPCManager.propTypes = {
  profile: PropTypes.object.isRequired,
  noEncounterAddTutorial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { noEncounterAddTutorial }
)(withRouter(NPCManager));
