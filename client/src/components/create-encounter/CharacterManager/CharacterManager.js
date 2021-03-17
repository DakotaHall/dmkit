import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import PropTypes from "prop-types";
import WoodPlank from "../../../images/wood_plank.png";
import CharacterRibbon from "../../../images/character_ribbon.png";
import ArrowRight from "../../../images/red_arrow_right.png";
import ArrowLeft from "../../../images/red_arrow_left.png";
import Book from "../../../images/book_dmkit_cropped.png";
import RedPlus from "../../../images/red_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";
import RedX from "../../../images/red_x1.png";
import GrayX from "../../../images/gray_x.png";
import GreenCheckmark from "../../../images/green_check_button.png";
import { noEncounterAddTutorial } from "../../../actions/profileActions";
import Wizard from "../../../images/booboo.png";

class CharacterManager extends Component {
  state = {
    characters: this.props.characters,
    characterNames: [],
    characterNumbers: [],
    characterNamesWithNumbers: [],
    showCharacters: this.props.showCharacters,
    premadeCharacters: this.props.premadeCharacters,
    changed: false,
    characterDisplay: [],
    encounterCharactersSize: "EncounterCharacters",
    updatedCharacters: [],
    displayIndex: 0,
    slideshowIndex: 0,
    bookIndex: 0,
    arrowRight: "ArrowRight",
    arrowLeft: "ArrowLeft",
    headSection: "HeadSection",
    display: "CharacterDisplay",
    ribbonDisplay: "CharacterHeaderRibbonSection",
    addCharacterActive: false,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false,
    hoveredArray: [],
    greenCheckArray: [],
    xHovered: false,
    reset: false,
    timers: [],
    characterAddedText: <div className="Hidden" />,
    tutorialPane: 1,
    tutorialText:
      'Hey! Welcome to the "Add a Character" section of the Encounter page! Both the "Add an NPC" and "Add a Monster" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
    showTutorial: false,
    tutorialPreviousDisplay: "Hidden",
    tutorialNextDisplay: "",
    neverShow: false,
    encounterTutorialPane: "Encounter3"
  };

  UNSAFE_componentWillMount = () => {
    let newHoveredArray = [];
    let newGreenCheckArray = [];
    for (let i = 0; i < this.state.premadeCharacters.length; i++) {
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
      if (this.state.displayIndex >= this.props.characters.length) {
        this.setState({ displayIndex: 0 });
      }
    });
  };

  arrowLeft = () => {
    this.setState({ displayIndex: this.state.displayIndex - 1 }, () => {
      if (this.state.displayIndex < this.props.characters.length * -1 + 1) {
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

  changeCharacter = (characterIndex, characterData) => {
    let oldState = this.state.updatedCharacters;
    oldState[characterIndex] = characterData;
    this.setState({ updatedCharacters: oldState });
  };

  addCharacterDisplay = () => {
    this.setState({ addCharacterActive: true, showTutorial: true });
  };

  closeCharacterDisplay = () => {
    let hoveredArray = this.state.hoveredArray;
    let greenCheckArray = this.state.greenCheckArray;
    for (let i = 0; i < greenCheckArray.length; i++) {
      greenCheckArray[i].greenCheck = false;
      hoveredArray[i].hovered = false;
    }
    this.setState({
      addCharacterActive: false,
      xHovered: false,
      showTutorial: false,
      hoveredArray: hoveredArray,
      greenCheckArray: greenCheckArray,
      characterAddedText: <div className="Hidden" />
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showCharacters !== prevProps.showCharacters) {
      this.setState(
        {
          showCharacters: this.props.showCharacters
        },
        () => {}
      );
    }
  }

  removeCharacter = index => {
    this.props.removeCharacter(index);
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
          characterAddedText: <div className="Hidden" />,
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

  addCharacter = character => {
    this.setState(
      {
        characterAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {character.name} successfully added to encounter characters!
            </div>
          </div>
        )
      },
      () => {
        let neededIndex = this.state.premadeCharacters.findIndex(
          x => x._id === character._id
        );
        this.fadeTextTwo(neededIndex);
        this.props.addCharacter(character);
      }
    );
  };

  nextTutorialPane = () => {
    if (this.state.tutorialPane === 1) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each Character has a button with a "+" on it. When this button is clicked, the character will be added to the characters section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the character has been added to the "Characters" section.',
        tutorialPreviousDisplay: "",
        encounterTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a character is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two characters with the same name are added, the last character added will have a number after its name. This number will increment for each copy of that character that is added. This persists even if one of the characters with the matching name is removed from the encounter. If you add 3 characters with the same name, the names will appear in both the "Characters" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the character titled "Name" is removed, and then the same character is added again, the new character will have the title "Name 4".',
        encounterTutorialPane: "Encounter2"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 4,
        tutorialText:
          "Unlike the Settlement variation of adding NPCs, the changes you make to characters here will not affect other copies of the character, nor will it affect the original character referenced to create this one.",
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
          'Hey! Welcome to the "Add a Character" section of the Encounter page! Both the "Add an NPC" and "Add a Monster" sections work the same as this one, so this tutorial will only popup the first time any of these are clicked. ',
        tutorialPreviousDisplay: "Hidden",
        encounterTutorialPane: "Encounter3"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'As you can see, each Character has a button with a "+" on it. When this button is clicked, the character will be added to the characters section. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you that the character has been added to the "Characters" section.',
        encounterTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 4) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'Whenever a character is added, its name and initiative bonus will automatically appear in the Initiative Tracker. Additionally, if two characters with the same name are added, the last character added will have a number after its name. This number will increment for each copy of that character that is added. This persists even if one of the characters with the matching name is removed from the encounter. If you add 3 characters with the same name, the names will appear in both the "Characters" section and Initiative Tracker as "Name", "Name 2", "Name 3". If the character titled "Name" is removed, and then the same character is added again, the new character will have the title "Name 4".',
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
    if (this.state.characters === null || loading) {
      swag = <Spinner />;
    } else {
      if (this.state.characters.length > 0) {
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

    let addCharacter;
    let characterOptions = this.state.premadeCharacters.map(
      (character, index) => {
        let characterImage;
        if (character.image !== null) {
          characterImage = character.image;
        } else {
          characterImage = "../../../../images/character_ribbon.png";
        }
        let plusImage;
        if (this.state.characters.length >= 50) {
          plusImage = (
            <img src={RedX} alt="X" className="ImageFill NotAllowed" />
          );
        } else if (this.state.greenCheckArray[index].greenCheck === true) {
          plusImage = (
            <img
              src={GreenCheckmark}
              alt="+"
              className="ImageFill"
              onClick={e => {
                e.preventDefault();
                this.addCharacter(character);
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
                this.addCharacter(character);
              }}
            />
          );
        } else {
          plusImage = (
            <img
              src={RedPlus}
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
            key={`EncounterAddCharacter${this.state.premadeCharacters.indexOf(
              character
            )}`}
            className="ViewPageCharacter"
          >
            <div className="ViewPageDisplayImageHolder">
              <img
                src={characterImage}
                className="ViewPageDisplayImage"
                alt="character"
              />
            </div>

            <div className="ViewPageDisplayName">{character.name}</div>

            <div className="LowerCenteredImageHolder">
              <div className="LowerCenteredImage">
                <div className="CenteredImage">{plusImage}</div>
              </div>
            </div>
          </div>
        );
      }
    );

    let characterDisplay = [];
    let bookIndex = this.state.bookIndex;
    let leftSide = [];
    let rightSide = [];

    for (let i = 0; i < characterOptions.length; i++) {
      characterDisplay.push(characterOptions[i]);
    }

    if (characterDisplay.length < 18) {
      for (let i = 0; i < characterDisplay.length; i++) {
        if (i < 9) {
          leftSide.push(characterDisplay[i]);
        } else {
          rightSide.push(characterDisplay[i]);
        }
      }
    } else {
      for (let i = 0; i < 18; i++) {
        if (Math.abs(bookIndex) >= characterDisplay.length) {
          bookIndex = 0;
        }
        let index = parseInt(bookIndex, 10);

        if (index + i >= characterDisplay.length) {
        } else if (index + i < 0) {
        } else {
          if (i < 9) {
            leftSide.push(characterDisplay[index + i]);
          } else {
            rightSide.push(characterDisplay[index + i]);
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
    if (characterDisplay.length < this.state.bookIndex + 19) {
      rightArrow = null;
    } else {
      rightArrow = (
        <img
          src={ArrowRight}
          className="ArrowRightBook"
          alt="right"
          onClick={this.bookArrowRight.bind(this, characterDisplay.length)}
        />
      );
    }
    let xImage;
    if (this.state.xHovered === false) {
      xImage = (
        <img
          src={RedX}
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
          onClick={this.closeCharacterDisplay}
        />
      );
    }
    if (this.state.addCharacterActive) {
      addCharacter = (
        <div className="DarkOverlay">
          <div className="ViewPageHolder">
            <div className="BookHolder">
              <img src={Book} alt="" className="ImageFill" />
            </div>
            {leftArrow}
            {rightArrow}
            {showTutorialPane}
            {this.state.characterAddedText}
            <div className="BookPages">
              <div className="AddNPCCloseButton">
                <div className="CenteredImage">{xImage}</div>
              </div>
              <div className={this.state.bookPageLeft}>{leftSide}</div>
              <div className={this.state.bookPageRight}>{rightSide}</div>
            </div>
          </div>
        </div>
      );
    } else {
      addCharacter = <div />;
    }
    let displaySlideshowInfo = [];
    for (let i = 0; i < this.props.showCharacters.length; i++) {
      displaySlideshowInfo.push(this.state.showCharacters[i]);
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
          src={RedPlus}
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
        {addCharacter}
        <div
          onMouseEnter={this.enterHandler}
          onMouseLeave={this.exitHandler}
          className={this.state.encounterCharactersSize}
        >
          {slideshowArrowRight}
          {slideshowArrowLeft}
          {swag}
          <div className={this.state.headSection}>
            <img src={WoodPlank} className="CharacterHeaderImage" alt="" />
            <div className={this.state.ribbonDisplay}>
              <img
                src={CharacterRibbon}
                className="CharacterHeaderRibbon"
                alt=""
              />
            </div>

            <div className="HeaderText CharacterHeaderColor">CHARACTERS </div>

            <div
              className="EncounterMonstersAddMonsterButton"
              onClick={this.addCharacterDisplay}
            >
              <div className="CenteredImage">
                <div className="ImageFill">{plusImage}</div>
              </div>
            </div>
          </div>

          <div className={this.state.display}>{displaySlideshow}</div>
        </div>
      </div>
    );
  }
}

CharacterManager.propTypes = {
  profile: PropTypes.object.isRequired,
  noEncounterAddTutorial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { noEncounterAddTutorial }
)(withRouter(CharacterManager));
