import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import PropTypes from "prop-types";
import WoodPlank from "../../../images/wood_plank.png";
import MonsterRibbon from "../../../images/monster_ribbon.png";
import ArrowRight from "../../../images/purple_arrow_right.png";
import ArrowLeft from "../../../images/purple_arrow_left.png";
import Book from "../../../images/book_dmkit_cropped.png";
import PurplePlus from "../../../images/purple_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";
import PurpleX from "../../../images/purple_x.png";
import GrayX from "../../../images/gray_x.png";
import GreenCheckmark from "../../../images/green_check_button.png";
import { noEncounterAddTutorial } from "../../../actions/profileActions";
import Wizard from "../../../images/booboo.png";

class MonsterManager extends Component {
  state = {
    monsters: this.props.monsters,
    premadeMonsters: this.props.premadeMonsters,
    changed: false,
    showMonsters: this.props.showMonsters,
    monsterDisplay: [],
    encounterMonstersSize: "EncounterMonsters",
    updatedMonsters: [],
    displayIndex: 0,
    slideshowIndex: 0,
    bookIndex: 0,
    arrowRight: "ArrowRight",
    arrowLeft: "ArrowLeft",
    headSection: "HeadSection",
    characterDisplay: "CharacterDisplay",
    ribbonDisplay: "CharacterHeaderRibbonSection",
    addMonsterActive: false,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false,
    hoveredArray: [],
    greenCheckArray: [],
    xHovered: false,
    reset: false,
    timers: [],
    monsterAddedText: <div className="Hidden" />,
    tutorialPane: 1,
    tutorialText:
      'Hey! Welcome to the "Add a Monster" section of the Encounter page! Both the "Add an NPC" and "Add a Monster" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
    showTutorial: false,
    tutorialPreviousDisplay: "Hidden",
    tutorialNextDisplay: "",
    neverShow: false,
    encounterTutorialPane: "Encounter3"
  };

  componentWillMount = () => {
    let newHoveredArray = [];
    let newGreenCheckArray = [];
    for (let i = 0; i < this.state.premadeMonsters.length; i++) {
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showMonsters !== prevProps.showMonsters) {
      this.setState(
        {
          showMonsters: this.props.showMonsters
        },
        () => {}
      );
    }
  }

  arrowRight = () => {
    this.setState({ displayIndex: this.state.displayIndex + 1 }, () => {
      if (this.state.displayIndex >= this.props.monsters.length) {
        this.setState({ displayIndex: 0 });
      }
    });
  };

  arrowLeft = () => {
    this.setState({ displayIndex: this.state.displayIndex - 1 }, () => {
      if (this.state.displayIndex < this.props.monsters.length * -1 + 1) {
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

  allMonsterTest = swag => {
    let oldState = this.state.updatedMonsters;
    oldState.push(swag);
    this.setState({ updatedMonsters: oldState });
    setTimeout(this.allMonsters, 1000);
  };

  allMonsters = () => {};

  changeMonster = (monsterIndex, monsterData) => {
    let oldState = this.state.updatedMonsters;
    oldState[monsterIndex] = monsterData;

    this.setState({ updatedMonsters: oldState });
  };

  addMonsterDisplay = () => {
    this.setState({ addMonsterActive: true });
  };

  closeMonsterDisplay = () => {
    let hoveredArray = this.state.hoveredArray;
    let greenCheckArray = this.state.greenCheckArray;
    for (let i = 0; i < greenCheckArray.length; i++) {
      greenCheckArray[i].greenCheck = false;
      hoveredArray[i].hovered = false;
    }
    this.setState({
      addMonsterActive: false,
      xHovered: false,
      showTutorial: false,
      hoveredArray: hoveredArray,
      greenCheckArray: greenCheckArray,
      monsterAddedText: <div className="Hidden" />
    });
  };

  removeMonster = index => {
    this.props.removeMonster(index);
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
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
  changeX = () => {
    if (this.state.xHovered === false) {
      this.setState({ xHovered: true });
    } else {
      this.setState({ xHovered: false });
    }
  };

  fadeText = index => {
    let timers = this.state.timers;
    timers.push(
      setTimeout(() => {
        let greenCheckArray = this.state.greenCheckArray;
        greenCheckArray[index].greenCheck = false;
        this.setState({
          monsterAddedText: <div className="Hidden" />,
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

  addMonster = monster => {
    this.setState(
      {
        monsterAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {monster.name} successfully added to encounter monsters!
            </div>
          </div>
        )
      },
      () => {
        let neededIndex = this.state.premadeMonsters.findIndex(
          x => x._id === monster._id
        );
        this.fadeTextTwo(neededIndex);
        this.props.addMonster(monster);
      }
    );
  };

  nextTutorialPane = () => {
    if (this.state.tutorialPane === 1) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each Monster has a button with a "+" on it. When this button is clicked, the monster will be added to the monsters section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the monster has been added to the "Monsters" section.',
        tutorialPreviousDisplay: "",
        encounterTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a monster is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two monsters with the same name are added, the last monster added will have a number after its name. This number will increment for each copy of that monster that is added. This persists even if one of the monsters with the matching name is removed from the encounter. If you add 3 monsters with the same name, the names will appear in both the "Monsters" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the monster titled "Name" is removed, and then the same monster is added again, the new monster will have the title "Name 4".',
        encounterTutorialPane: "Encounter2"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 4,
        tutorialText:
          "Unlike the Settlement variation of adding NPCs, the changes you make to monsters here will not affect other copies of the monster, nor will it affect the original monster referenced to create this one.",
        tutorialNextDisplay: "Hidden",
        encounterTutorialPane: "Encounter3"
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
          'Hey! Welcome to the "Add a Monster" section of the Encounter page! Both the "Add an NPC" and "Add a Monster" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
        tutorialPreviousDisplay: "Hidden",
        encounterTutorialPane: "Encounter3"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each Monster has a button with a "+" on it. When this button is clicked, the monster will be added to the monsters section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the monster has been added to the "Monsters" section.',
        encounterTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 4) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a monster is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two monsters with the same name are added, the last monster added will have a number after its name. This number will increment for each copy of that monster that is added. This persists even if one of the monsters with the matching name is removed from the encounter. If you add 3 monsters with the same name, the names will appear in both the "Monsters" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the monster titled "Name" is removed, and then the same monster is added again, the new monster will have the title "Name 4".',
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

    if (this.state.monsters === null || loading) {
      swag = <Spinner />;
    } else {
      if (this.state.monsters.length > 0) {
      } else {
      }
    }
    let showTutorialPane;
    if (profile.encounter_add_tutorial !== false) {
      if (this.state.showTutorial && this.props.addTutorialShow) {
        showTutorialPane = (
          <div className="DarkOverlay">
            {" "}
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
    let addMonster;
    let monsterOptions = this.state.premadeMonsters.map((monster, index) => {
      let monsterImage;
      if (monster.image !== null) {
        monsterImage = monster.image;
      } else {
        monsterImage = "../../../../images/monsters_ribbon.png";
      }
      let plusImage;
      if (this.state.monsters.length >= 50) {
        plusImage = (
          <img src={PurpleX} alt="X" className="ImageFill NotAllowed" />
        );
      } else if (this.state.greenCheckArray[index].greenCheck === true) {
        plusImage = (
          <img
            src={GreenCheckmark}
            alt="+"
            className="ImageFill"
            onClick={e => {
              e.preventDefault();
              this.addMonster(monster);
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
            onMouseLeave={() => {
              this.changeArrayPlus(index);
            }}
            onClick={e => {
              e.preventDefault();
              this.addMonster(monster);
            }}
          />
        );
      } else {
        plusImage = (
          <img
            src={PurplePlus}
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
          key={`EncounterAddMonster${this.state.premadeMonsters.indexOf(
            monster
          )}`}
          className="ViewPageCharacter"
        >
          <div className="ViewPageDisplayImageHolder">
            <img
              src={monsterImage}
              className="ViewPageDisplayImage"
              alt="monster"
            />
          </div>

          <div className="ViewPageDisplayName">{monster.name}</div>

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
    let monsterDisplay = [];
    let bookIndex = this.state.bookIndex;

    for (let i = 0; i < monsterOptions.length; i++) {
      monsterDisplay.push(monsterOptions[i]);
    }

    if (monsterDisplay.length < 18) {
      for (let i = 0; i < monsterDisplay.length; i++) {
        if (i < 9) {
          leftSide.push(monsterDisplay[i]);
        } else {
          rightSide.push(monsterDisplay[i]);
        }
      }
    } else {
      for (let i = 0; i < 18; i++) {
        if (Math.abs(bookIndex) >= monsterDisplay.length) {
          bookIndex = 0;
        }
        let index = parseInt(bookIndex, 10);

        if (index + i >= monsterDisplay.length) {
        } else if (index + i < 0) {
        } else {
          if (i < 9) {
            leftSide.push(monsterDisplay[index + i]);
          } else {
            rightSide.push(monsterDisplay[index + i]);
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
    if (monsterDisplay.length < this.state.bookIndex + 19) {
      rightArrow = null;
    } else {
      rightArrow = (
        <img
          src={ArrowRight}
          className="ArrowRightBook"
          alt="right"
          onClick={this.bookArrowRight.bind(this, monsterDisplay.length)}
        />
      );
    }
    let xImage;
    if (this.state.xHovered === false) {
      xImage = (
        <img
          src={PurpleX}
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
    if (this.state.addMonsterActive) {
      addMonster = (
        <div className="DarkOverlay">
          <div className="ViewPageHolder">
            <div className="BookHolder">
              <img src={Book} alt="" className="ImageFill" />
            </div>
            {leftArrow}
            {rightArrow}
            {showTutorialPane}
            {this.state.monsterAddedText}
            <div className="BookPages">
              <div
                className="AddNPCCloseButton"
                onClick={this.closeMonsterDisplay}
              >
                <div className="CenteredImage">{xImage}</div>
              </div>
              <div className={this.state.bookPageLeft}>{leftSide}</div>
              <div className={this.state.bookPageRight}>{rightSide}</div>
            </div>
          </div>
        </div>
      );
    } else {
      addMonster = <div />;
    }
    let displaySlideshowInfo = [];
    for (let i = 0; i < this.props.showMonsters.length; i++) {
      displaySlideshowInfo.push(this.state.showMonsters[i]);
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
          src={PurplePlus}
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
        {addMonster}
        <div
          onMouseEnter={this.enterHandler}
          onMouseLeave={this.exitHandler}
          className={this.state.encounterMonstersSize}
        >
          {slideshowArrowLeft}
          {slideshowArrowRight}
          {swag}

          <div className={this.state.headSection}>
            <img src={WoodPlank} className="CharacterHeaderImage" alt="" />
            <div className={this.state.ribbonDisplay}>
              <img
                src={MonsterRibbon}
                className="CharacterHeaderRibbon"
                alt=""
              />
            </div>
            <div className="HeaderText MonsterHeaderColor">MONSTERS </div>

            <div
              className="EncounterMonstersAddMonsterButton"
              onClick={this.addMonsterDisplay}
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

MonsterManager.propTypes = {
  profile: PropTypes.object.isRequired,
  noEncounterAddTutorial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { noEncounterAddTutorial }
)(withRouter(MonsterManager));
