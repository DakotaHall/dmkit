import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import CharacterManager from "../../create-encounter/CharacterManager/CharacterManager";
import MonsterManager from "../../create-encounter/MonsterManager/MonsterManager";
import NPCManager from "../../create-encounter/NPCManager/NPCManager";
import InitiativeDisplay from "../../create-encounter/InitiativeManager/InitiativeDisplay";
import DiceRoller from "../../create-encounter/DiceRoller/DiceRoller";
import RulesHelper from "../../create-encounter/RulesHelper/RulesHelper";
import {
  editEncounter,
  openGamingLicense,
  getCurrentProfile,
  noEncounterTutorial
} from "../../../actions/profileActions";
import InitiativeBanner from "../../../images/initiative_banner.png";
import Page from "../../../images/page1.png";
import EncounterBanner from "../../../images/boss_banner.png";
import IndividualCharacter from "../../create-encounter/CharacterManager/IndividualCharacter";
import IndividualMonster from "../../create-encounter/MonsterManager/IndividualMonster";
import IndividualNPC from "../../create-encounter/NPCManager/IndividualNPC";
import classnames from "classnames";
import GreenPlus from "../../../images/green_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";
import Wizard from "../../../images/booboo.png";

class InteractiveEncounter extends Component {
  state = {
    encounterId: window.location.pathname.substr(12, 200),
    neededProfile: null,
    title: "",
    description: "",
    characters: [],
    monsters: [],
    npcs: [],
    initiativeDisplay: [],
    sortedInitiative: [],
    characterNames: [],
    characterNumbers: [],
    characterNamesWithNumbers: [],
    randomNameList: [],
    monsterNames: [],
    monsterNumbers: [],
    monsterNamesWithNumbers: [],
    monsterNameList: [],
    npcNames: [],
    npcNumbers: [],
    npcNamesWithNumbers: [],
    npcNameList: [],
    characterSection: "",
    monsterSection: "",
    npcSection: "",
    characterIndex: "",
    monsterIndex: "",
    errors: {},
    hovered: false,
    hoveredArray: [],
    greenCheckArray: [],
    xHovered: false,
    characterAddedText: "",
    npcAddedText: <div className="Hidden" />,
    monsterAddedText: "",
    tutorialPane: 1,
    tutorialText:
      'Hey! Welcome to the Encounter page of the DMKit! Here you will be able to keep track of all your players, monsters, and NPCs involved in an encounter. There are also a few other tools to help you with tracking initiative, rolling dice, and looking up rules. Tutorials for the addition of characters, monsters, and NPCs will popup the first time you click the red, purple, or blue "+" button. The only other sections that require an explanation are the Initiative Tracker section and the Rules Helper section.',
    showTutorial: true,
    tutorialPreviousDisplay: "Hidden",
    tutorialNextDisplay: "",
    neverShow: false,
    addTutorialShow: true,
    settlementTutorialPane: "Encounter1"
  };

  componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.profile.profile !== this.props.profile.profile) {
      this.setState(
        {
          neededProfile: this.props.profile.profile
        },
        () => {
          let neededEncounter = this.state.neededProfile.encounters.find(
            x => x._id === this.state.encounterId
          );
          this.setState({
            title: neededEncounter.title,
            description: neededEncounter.description,
            characters: neededEncounter.characters,
            monsters: neededEncounter.monsters,
            npcs: neededEncounter.npcs,
            initiativeDisplay: neededEncounter.initiativeDisplay,
            characterNames: neededEncounter.characterNames,
            characterNumbers: neededEncounter.characterNumbers,
            characterNamesWithNumbers:
              neededEncounter.characterNamesWithNumbers,
            randomNameList: neededEncounter.characterNameList,
            monsterNames: neededEncounter.monsterNames,
            monsterNumbers: neededEncounter.monsterNumbers,
            monsterNamesWithNumbers: neededEncounter.monsterNamesWithNumbers,
            monsterNameList: neededEncounter.monsterNameList,
            npcNames: neededEncounter.npcNames,
            npcNumbers: neededEncounter.npcNumbers,
            npcNamesWithNumbers: neededEncounter.npcNamesWithNumbers,
            npcNameList: neededEncounter.npcNameList
          });
        }
      );
    }
  };

  componentDidMount = () => {};

  onSubmit = () => {
    let encounter = {
      title: this.state.title,
      description: this.state.description,
      characters: this.state.characters,
      npcs: this.state.npcs,
      monsters: this.state.monsters,
      initiativeDisplay: this.state.initiativeDisplay,
      characterNameList: this.state.randomNameList,
      monsterNameList: this.state.monsterNameList,
      npcNameList: this.state.npcNameList,
      characterNames: this.state.characterNames,
      characterNumbers: this.state.characterNumbers,
      characterNamesWithNumbers: this.state.characterNamesWithNumbers,
      monsterNames: this.state.monsterNames,
      monsterNumbers: this.state.monsterNumbers,
      monsterNamesWithNumbers: this.state.monsterNamesWithNumbers,
      npcNames: this.state.npcNames,
      npcNumbers: this.state.npcNumbers,
      npcNamesWithNumbers: this.state.npcNamesWithNumbers
    };
    this.props.editEncounter(
      encounter,
      this.state.encounterId,
      this.props.history
    );
  };

  onChange = e => {
    if (e.target.name === "neverShow") {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  updateInitiativeElement = (name, initiativeBonus, initiative, index) => {
    let newInit = {
      name: name,
      initiativeBonus: initiativeBonus,
      initiative: initiative
    };
    let newInitiative = this.state.initiativeDisplay;
    newInitiative[index] = newInit;
    this.setState({ initiativeDisplay: newInitiative });
  };

  updateInitiative = (updateObject, objectType, objectIndex) => {
    let newInitiativeArray = this.state.initiativeDisplay;
    let initiativeObject;
    if (updateObject === "update") {
      if (objectType === "character") {
        initiativeObject = {
          name: this.state.randomNameList[objectIndex],
          initiative: "",
          initiativeBonus: this.state.characters[objectIndex].initiative
        };
      } else if (objectType === "monster") {
        initiativeObject = {
          name: this.state.monsterNameList[objectIndex],
          initiative: "",
          initiativeBonus: this.state.monsters[objectIndex].dexterity
        };
      } else if (objectType === "npc") {
        initiativeObject = {
          name: this.state.npcNameList[objectIndex],
          initiative: "",
          initiativeBonus: this.state.npcs[objectIndex].initiative
        };
      }
      newInitiativeArray.push(initiativeObject);
    } else {
      let newInitiativeObject = {
        name: "",
        initiativeBonus: "",
        initiative: ""
      };
      newInitiativeArray.push(newInitiativeObject);
    }

    this.setState({ initiativeDisplay: newInitiativeArray });
  };

  removeInitiativeElement = index => {
    let newInitiativeArray = this.state.initiativeDisplay;
    newInitiativeArray.splice(index, 1);

    this.setState({ initaitiveDisplay: newInitiativeArray });
  };

  sortInitiative = () => {
    let sortedInitiative = this.state.initiativeDisplay;

    sortedInitiative.sort(function(a, b) {
      return b.initiative - a.initiative;
    });
    this.setState({ initiativeDisplay: sortedInitiative });
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  MaximizeAdjuster = () => {
    let rulesHelper = document.getElementsByClassName("RulesHelper");
    let encounterMonstersEnlarged = document.getElementsByClassName(
      "EncounterMonsterEnlargedStats"
    );
    let encounterCharactersEnlarged = document.getElementsByClassName(
      "EncounterCharacterEnlargedStats"
    );
    let encounterNPCsEnlarged = document.getElementsByClassName(
      "EncounterNPCEnlargedStats"
    );

    if (rulesHelper.length === 0) {
      if (encounterMonstersEnlarged.length !== 0) {
        for (let i = 0; i < encounterMonstersEnlarged.length; i++) {
          encounterMonstersEnlarged[i].style.width = 32 + "%";
        }
      }
      if (encounterCharactersEnlarged.length !== 0) {
        for (let i = 0; i < encounterCharactersEnlarged.length; i++) {
          encounterCharactersEnlarged[i].style.width = 32 + "%";
        }
      }
      if (encounterNPCsEnlarged.length !== 0) {
        for (let i = 0; i < encounterNPCsEnlarged.length; i++) {
          encounterNPCsEnlarged[i].style.width = 32 + "%";
        }
      }
    }
  };

  MinimizeAdjuster = () => {
    let rulesHelper = document.getElementsByClassName("RulesHelper");
    let encounterCharacters = document.getElementsByClassName(
      "EncounterCharacterStats"
    );
    if (rulesHelper.length === 0) {
      for (let i = 0; i < encounterCharacters.length; i++) {
        encounterCharacters[i].style.width = 23.57 + "%";
      }
    }
  };

  updateCharacters = updatedCharacters => {
    this.setState({ characters: updatedCharacters });
  };

  updateNPCs = updatedNPCs => {
    this.setState({ npcs: updatedNPCs });
  };

  updateMonsters = updatedMonsters => {
    this.setState({ monsters: updatedMonsters });
  };

  addCharacter = character => {
    let newCharacters = this.state.characters;
    newCharacters.push(character);
    let characterNames = this.state.characterNames;
    let characterNumbers = this.state.characterNumbers;
    let characterNamesWithNumbers = this.state.characterNamesWithNumbers;
    let newCharacterNumber;
    let findCharacterNames = [];
    let maxNumber = null;

    if (characterNames.indexOf(character.name) !== -1) {
      let index = characterNames.indexOf(character.name);
      while (index !== -1) {
        findCharacterNames.push(index);
        index = characterNames.indexOf(character.name, index + 1);
      }
      for (let i = 0; i < findCharacterNames.length; i++) {
        if (characterNumbers[findCharacterNames[i]] > maxNumber) {
          maxNumber = characterNumbers[findCharacterNames[i]];
        }
      }
      if (maxNumber === null) {
        newCharacterNumber = 2;
      } else {
        newCharacterNumber = maxNumber + 1;
      }
    } else {
      newCharacterNumber = null;
    }
    let tempCharacterName = character.name + " " + newCharacterNumber;
    characterNames.push(character.name);
    characterNamesWithNumbers.push(tempCharacterName);
    characterNumbers.push(newCharacterNumber);
    let randomNameList = this.state.randomNameList;
    if (characterNumbers[characterNumbers.length - 1] === null) {
      randomNameList.push(characterNames[characterNames.length - 1]);
    } else {
      randomNameList.push(
        characterNamesWithNumbers[characterNamesWithNumbers.length - 1]
      );
    }

    for (let i = 0; i < randomNameList.length; i++) {}
    this.setState(
      {
        characters: newCharacters,
        randomNameList: randomNameList,
        characterNames: characterNames,
        characterNumbers: characterNumbers,
        characterNamesWithNumbers: characterNamesWithNumbers
      },
      () => {
        this.updateInitiative(
          "update",
          "character",
          this.state.characters.length - 1
        );
      }
    );
  };

  addMonster = monster => {
    let newMonsters = this.state.monsters;
    newMonsters.push(monster);
    let monsterNames = this.state.monsterNames;
    let monsterNumbers = this.state.monsterNumbers;
    let monsterNamesWithNumbers = this.state.monsterNamesWithNumbers;
    let newMonsterNumber;
    let findMonsterNames = [];
    let maxNumber = null;

    if (monsterNames.indexOf(monster.name) !== -1) {
      let index = monsterNames.indexOf(monster.name);
      while (index !== -1) {
        findMonsterNames.push(index);
        index = monsterNames.indexOf(monster.name, index + 1);
      }
      for (let i = 0; i < findMonsterNames.length; i++) {
        if (monsterNumbers[findMonsterNames[i]] > maxNumber) {
          maxNumber = monsterNumbers[findMonsterNames[i]];
        }
      }
      if (maxNumber === null) {
        newMonsterNumber = 2;
      } else {
        newMonsterNumber = maxNumber + 1;
      }
    } else {
      newMonsterNumber = null;
    }
    let tempMonsterName = monster.name + " " + newMonsterNumber;
    monsterNames.push(monster.name);
    monsterNamesWithNumbers.push(tempMonsterName);
    monsterNumbers.push(newMonsterNumber);
    let randomNameList = this.state.monsterNameList;
    if (monsterNumbers[monsterNumbers.length - 1] === null) {
      randomNameList.push(monsterNames[monsterNames.length - 1]);
    } else {
      randomNameList.push(
        monsterNamesWithNumbers[monsterNamesWithNumbers.length - 1]
      );
    }

    for (let i = 0; i < randomNameList.length; i++) {}
    this.setState(
      {
        monsters: newMonsters,
        monsterNameList: randomNameList,
        monsterNames: monsterNames,
        monsterNumbers: monsterNumbers,
        monsterNamesWithNumbers: monsterNamesWithNumbers
      },
      () => {
        this.updateInitiative(
          "update",
          "monster",
          this.state.monsters.length - 1
        );
      }
    );
  };

  addNPC = npc => {
    let newNPCs = this.state.npcs;
    newNPCs.push(npc);
    let npcNames = this.state.npcNames;
    let npcNumbers = this.state.npcNumbers;
    let npcNamesWithNumbers = this.state.npcNamesWithNumbers;
    let newNPCNumber;
    let findNPCNames = [];
    let maxNumber = null;

    if (npcNames.indexOf(npc.name) !== -1) {
      let index = npcNames.indexOf(npc.name);
      while (index !== -1) {
        findNPCNames.push(index);
        index = npcNames.indexOf(npc.name, index + 1);
      }
      for (let i = 0; i < findNPCNames.length; i++) {
        if (npcNumbers[findNPCNames[i]] > maxNumber) {
          maxNumber = npcNumbers[findNPCNames[i]];
        }
      }
      if (maxNumber === null) {
        newNPCNumber = 2;
      } else {
        newNPCNumber = maxNumber + 1;
      }
    } else {
      newNPCNumber = null;
    }
    let tempNPCName = npc.name + " " + newNPCNumber;
    npcNames.push(npc.name);
    npcNamesWithNumbers.push(tempNPCName);
    npcNumbers.push(newNPCNumber);
    let randomNameList = this.state.npcNameList;
    if (npcNumbers[npcNumbers.length - 1] === null) {
      randomNameList.push(npcNames[npcNames.length - 1]);
    } else {
      randomNameList.push(npcNamesWithNumbers[npcNamesWithNumbers.length - 1]);
    }

    this.setState(
      {
        npcs: newNPCs,
        npcNameList: randomNameList,
        npcNames: npcNames,
        npcNumbers: npcNumbers,
        npcNamesWithNumbers: npcNamesWithNumbers
      },
      () => {
        this.updateInitiative("update", "npc", this.state.npcs.length - 1);
      }
    );
  };

  changeCharacter = (characterIndex, characterData) => {
    let oldState = this.state.characters;
    oldState[characterIndex] = characterData;
    this.setState({ characters: oldState });
  };

  changeMonster = (monsterIndex, monsterData) => {
    let oldState = this.state.monsters;
    oldState[monsterIndex] = monsterData;
    this.setState({ monsters: oldState });
  };

  changeNPC = (npcIndex, npcData) => {
    let oldState = this.state.npcs;
    oldState[npcIndex] = npcData;
    this.setState({ npcs: oldState });
  };

  removeCharacter = index => {
    let newCharacters = this.state.characters;
    let characterNames = this.state.randomNameList;
    newCharacters.splice(index, 1);
    characterNames.splice(index, 1);
    this.setState(
      {
        characters: newCharacters,
        randomNameList: characterNames
      },
      () => {
        this.hideSection("character");
      }
    );
  };

  removeMonster = index => {
    let newMonsters = this.state.monsters;
    let monsterNames = this.state.monsterNameList;
    newMonsters.splice(index, 1);
    monsterNames.splice(index, 1);
    this.setState(
      {
        monsters: newMonsters,
        monsterNameList: monsterNames
      },
      () => {
        this.hideSection("monster");
      }
    );
  };

  removeNPC = index => {
    let newNPCs = this.state.npcs;
    let npcNames = this.state.npcNameList;
    newNPCs.splice(index, 1);
    npcNames.splice(index, 1);
    this.setState(
      {
        npcs: newNPCs,
        npcNameList: npcNames
      },
      () => {
        this.hideSection("npc");
      }
    );
  };

  showSection = (section, index) => {
    if (section === "character") {
      this.setState({ characterIndex: index });
    } else if (section === "monster") {
      this.setState({ monsterIndex: index });
    } else if (section === "npc") {
      this.setState({ npcIndex: index });
    }
  };

  hideSection = section => {
    if (section === "character") {
      this.setState({ characterIndex: "" });
    } else if (section === "monster") {
      this.setState({ monsterIndex: "" });
    } else if (section === "npc") {
      this.setState({ npcIndex: "" });
    }
  };

  nextTutorialPane = () => {
    if (this.state.tutorialPane === 1) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          "We'll start off with the Initiative Tracker. The Initiative Tracker makes keeping track of characters', monsters', and npcs' initiatives a piece of cake. Whenever you add a character, monster, or NPC to the encounter, that creature's name and initiative bonus will appear within the Initiative Tracker. You can also click the green \"+\" to the right of the word Initiative to add a blank section to the tracker. . When you have added everything that you want to the encounter and assigned initiative rolls to each creature, you can click the \"Sort\" button and it will sort them all from highest roll to lowest roll. If you do not wish to input values manually, you can click the d20 and a random number from 1 to 20 will be computed. The creature's initiative bonus will then be applied, resulting in an accurate representation of a standard initiative roll.",
        tutorialPreviousDisplay: "",
        settlementTutorialPane: "Encounter2"
      });
    } else if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          "Next is the Rules Helper. The Rules Helper is a tool with many terms that you may or may not be familiar with, regardless of if you're a DM or not. If you are confused about a particular ruling, you can search for a particular phrase within the Rules Helper. Once you locate the word(s) within the Rules Helper, just scroll over it to see a popup with the particular ruling inscribed within it. Once your mouse leaves the popup or the phrase you are hovering over, the popup will disappear.",
        tutorialNextDisplay: "Hidden",
        settlementTutorialPane: "Encounter1"
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
          "Hey! Welcome to the Encounter page of the DMKit! Here you will be able to keep track of all your players, monsters, and NPCs involved in an encounter. There are also a few other tools to help you with tracking initiative, rolling dice, and looking up rules. Tutorials for the addition of characters, monsters, and NPCs will popup the first time you click the red, purple, or blue " +
          " button. The only other sections that require an explanation are the Initiative Tracker section and the Rules Helper section.",
        tutorialPreviousDisplay: "Hidden",
        settlementTutorialPane: "Encounter1"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          "We'll start off with the Initiative Tracker. The Initiative Tracker makes keeping track of characters', monsters', and npcs' initiatives a piece of cake. Whenever you add a character, monster, or NPC to the encounter, that creature's name and initiative bonus will appear within the Initiative Tracker. You can also click the green \"+\" to the right of the word Initiative to add a blank section to the tracker. . When you have added everything that you want to the encounter and assigned initiative rolls to each creature, you can click the \"Sort\" button and it will sort them all from highest roll to lowest roll. If you do not wish to input values manually, you can click the d20 and a random number from 1 to 20 will be computed. The creature's initiative bonus will then be applied, resulting in an accurate representation of a standard initiative roll.",
        tutorialNextDisplay: "",
        settlementTutorialPane: "Encounter2"
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
        this.disableEncounterTutorial();
      });
    } else {
      this.setState({ showTutorial: false });
    }
  };

  disableEncounterTutorial = () => {
    this.props.noEncounterTutorial();
  };

  addTutorialOff = () => {
    this.setState({ addTutorialShow: false });
  };

  render() {
    let encounter;
    const { loading } = this.props.profile;
    let { errors } = this.state;
    if (this.state.neededProfile === null || loading) {
      encounter = <Spinner />;
    } else {
      let showTutorialPane;
      if (this.state.neededProfile.encounter_tutorial !== false) {
        if (this.state.showTutorial) {
          showTutorialPane = (
            <div className="DarkOverlay">
              <div className="WizardHolder">
                <img className="ImageFill" src={Wizard} alt="" />
              </div>
              <div className="SettlementTutorialPaneTriangle" />
              <div className={this.state.settlementTutorialPane}>
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
                  {this.state.tutorialPane} / 3
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
      let allList = [];
      let allDisplay;
      if (this.state.initiativeDisplay.length === 0) {
        allList = [];
        allDisplay = allList.map(display => (
          <InitiativeDisplay
            key={Math.random()}
            name={display.name}
            index={allList.indexOf(display)}
            dexterity={display.dexterity}
            sortInitiative={this.sortInitiative}
            initiative={display.initiative}
            initiativeBonus={display.initiativeBonus}
            updateInitiativeElement={this.updateInitiativeElement}
            removeInitiativeElement={this.removeInitiativeElement}
          />
        ));
      } else {
        allDisplay = this.state.initiativeDisplay.map(display => (
          <InitiativeDisplay
            index={this.state.initiativeDisplay.indexOf(display)}
            key={Math.random()}
            name={display.name}
            dexterity={display.dexterity}
            initiative={display.initiative}
            initiativeBonus={display.initiativeBonus}
            updateInitiativeElement={this.updateInitiativeElement}
            removeInitiativeElement={this.removeInitiativeElement}
          />
        ));
      }

      let showCharacters = [];
      for (let i = 0; i < this.state.characters.length; i++) {
        let newCharacter = (
          <IndividualCharacter
            encounterCharacterSize="EncounterCharacterStats"
            key={`EncounterCharacters${i}`}
            showSection={this.showSection}
            hideSection={this.hideSection}
            characterName={this.state.randomNameList[i]}
            changeCharacter={this.changeCharacter}
            character={this.state.characters[i]}
            characterIndex={i}
            removeCharacter={this.removeCharacter}
          />
        );
        showCharacters.push(newCharacter);
      }

      let newShowCharacters = [];
      for (let i = 0; i < showCharacters.length; i++) {
        let newCharacter;
        if (this.state.characterIndex === i) {
          newCharacter = (
            <div key={`MaximizedCharacter${i}`} className="ImageFillTest">
              <IndividualCharacter
                encounterCharacterSize="EncounterCharacterStatsMaximized"
                key={`EncounterCharacters${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                characterName={this.state.randomNameList[i]}
                changeCharacter={this.changeCharacter}
                character={this.state.characters[i]}
                characterIndex={i}
                removeCharacter={this.removeCharacter}
              />
            </div>
          );
        } else {
          newCharacter = (
            <div key={`HiddenCharacter${i}`} className="Hidden">
              <IndividualCharacter
                encounterCharacterSize="EncounterCharacterStats"
                key={`EncounterCharacters${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                characterName={this.state.randomNameList[i]}
                changeCharacter={this.changeCharacter}
                character={this.state.characters[i]}
                characterIndex={i}
                removeCharacter={this.removeCharacter}
              />
            </div>
          );
        }
        newShowCharacters.push(newCharacter);
      }

      let showMonsters = [];
      for (let i = 0; i < this.state.monsters.length; i++) {
        let newMonster = (
          <IndividualMonster
            key={`EncounterMonsters${i}`}
            encounterCharacterSize="EncounterCharacterStats"
            showSection={this.showSection}
            hideSection={this.hideSection}
            monsterName={this.state.monsterNameList[i]}
            changeMonster={this.changeMonster}
            monster={this.state.monsters[i]}
            monsterIndex={i}
            removeMonster={this.removeMonster}
          />
        );
        showMonsters.push(newMonster);
      }
      let newShowMonsters = [];
      for (let i = 0; i < showMonsters.length; i++) {
        let newMonster;
        if (this.state.monsterIndex === i) {
          newMonster = (
            <div key={`MaximizedMonster${i}`} className="ImageFillTest">
              <IndividualMonster
                encounterCharacterSize="EncounterCharacterStatsMaximized"
                key={`EncounterMonsters${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                monsterName={this.state.monsterNameList[i]}
                changeMonster={this.changeMonster}
                monster={this.state.monsters[i]}
                monsterIndex={i}
                removeMonster={this.removeMonster}
              />
            </div>
          );
        } else {
          newMonster = (
            <div key={`HiddenMonster${i}`} className="Hidden">
              <IndividualMonster
                encounterCharacterSize="EncounterCharacterStats"
                key={`EncounterMonsters${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                monsterName={this.state.monsterNameList[i]}
                changeMonster={this.changeMonster}
                monster={this.state.monsters[i]}
                monsterIndex={i}
                removeMonster={this.removeMonster}
              />
            </div>
          );
        }
        newShowMonsters.push(newMonster);
      }

      let showNPCs = [];
      for (let i = 0; i < this.state.npcs.length; i++) {
        let newNPC = (
          <IndividualNPC
            key={`EncounterNPCs${i}`}
            encounterCharacterSize="EncounterCharacterStats"
            showSection={this.showSection}
            hideSection={this.hideSection}
            npcName={this.state.npcNameList[i]}
            changeNPC={this.changeNPC}
            npc={this.state.npcs[i]}
            npcIndex={i}
            removeNPC={this.removeNPC}
          />
        );
        showNPCs.push(newNPC);
      }
      let newShowNPCs = [];
      for (let i = 0; i < showNPCs.length; i++) {
        let newNPC;
        if (this.state.npcIndex === i) {
          newNPC = (
            <div key={`MaximizedNPC${i}`} className="ImageFillTest">
              <IndividualNPC
                encounterCharacterSize="EncounterCharacterStatsMaximized"
                key={`EncounterNPCs${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                npcName={this.state.npcNameList[i]}
                changeNPC={this.changeNPC}
                npc={this.state.npcs[i]}
                npcIndex={i}
                removeNPC={this.removeNPC}
              />
            </div>
          );
        } else {
          newNPC = (
            <div key={`HiddenNPC${i}`} className="Hidden">
              <IndividualNPC
                encounterCharacterSize="EncounterCharacterStats"
                key={`EncounterNPCs${i}`}
                showSection={this.showSection}
                hideSection={this.hideSection}
                npcName={this.state.npcNameList[i]}
                changeNPC={this.changeNPC}
                npc={this.state.npcs[i]}
                npcIndex={i}
                removeNPC={this.removeNPC}
              />
            </div>
          );
        }
        newShowNPCs.push(newNPC);
      }
      let plusImage;
      if (this.state.hovered === false) {
        plusImage = (
          <img
            src={GreenPlus}
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
      encounter = (
        <div className="ViewPageHolder">
          {showTutorialPane}
          <div
            className="GoBackBookEncounter"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to leave this page? Unsaved changes will be lost."
                )
              ) {
                window.location = "/encounters";
              }
            }}
          >
            <div className="CenteredPlusNoColor">
              <i className="fas fa-arrow-left" />
              Go Back
            </div>
          </div>
          <div className="ShowInfoButton" onClick={this.onSubmit}>
            <div className="CenteredImage">Create Encounter</div>
          </div>
          {newShowCharacters}
          {newShowMonsters}
          {newShowNPCs}
          <div className="EncounterInfo">
            <div className="EncounterName EncounterInfoHeaderColor">
              <img
                src={EncounterBanner}
                className="EncounterNameImage"
                alt=""
              />
              <input
                className={classnames("EncounterNameText", {
                  InvalidInput: errors.title
                })}
                placeholder="Encounter Name"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                maxLength="100"
              />
              {errors.title && <div className="FormError">{errors.title}</div>}
            </div>

            <div className="EncounterDescription">
              <img src={Page} className="EncounterDescriptionImage" alt="" />
              <textarea
                className="EncounterDescriptionText"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
          </div>
          <div className="InitiativeTracker">
            <div className="InitiativeTrackerImageHolder">
              <img
                src={InitiativeBanner}
                alt="InitiativeBanner"
                className="InitiativeTrackerImage"
              />
            </div>
            <div
              className="InitiativeAddButton"
              onClick={this.updateInitiative}
            >
              <div className="CenteredImage">
                <div className="ImageFill">{plusImage}</div>
              </div>
            </div>
            <div className="InitiativeTrackerText">
              <div className="CenteredNoPointer">INITIATIVE</div>
            </div>
            <div className="InitiativeDisplayAndSortContainer">
              <img src={Page} alt="InitiativePage" className="InitiativePage" />
              <div className="InitiativeDisplayHolder">{allDisplay}</div>

              <button
                className="InitiativeSortButton CursorPointer ViewSettlementsColors"
                onClick={this.sortInitiative}
              >
                Sort
              </button>
            </div>
          </div>
          <DiceRoller />
          <div className={this.state.characterSection}>
            <CharacterManager
              profile={this.state.neededProfile}
              characters={this.state.characters}
              showCharacters={showCharacters}
              updateCharacters={this.updateCharacters}
              premadeCharacters={this.state.neededProfile.characters}
              removeCharacter={this.removeCharacter}
              addCharacter={this.addCharacter}
              updateInitiative={this.updateInitiative}
              MaximizeAdjuster={this.MaximizeAdjuster}
              MinimizeAdjuster={this.MinimizeAdjuster}
              addTutorialShow={this.state.addTutorialShow}
              addTutorialOff={this.addTutorialOff}
            />
            <div className={this.state.monsterSection}>
              <MonsterManager
                profile={this.state.neededProfile}
                updateMonsters={this.updateMonsters}
                monsters={this.state.monsters}
                showMonsters={showMonsters}
                premadeMonsters={this.state.neededProfile.monsters}
                removeMonsters={this.removeMonsters}
                addMonster={this.addMonster}
                updateInitiative={this.updateInitiative}
                MaximizeAdjuster={this.MaximizeAdjuster}
                MinimizeAdjuster={this.MinimizeAdjuster}
                addTutorialShow={this.state.addTutorialShow}
                addTutorialOff={this.addTutorialOff}
              />
            </div>
            <div className={this.state.npcSection}>
              <NPCManager
                profile={this.state.neededProfile}
                NPCs={this.state.npcs}
                showNPCs={showNPCs}
                updateNPCs={this.updateNPCs}
                removeNPCs={this.removeNPCs}
                addNPC={this.addNPC}
                premadeNPCs={this.state.neededProfile.NPCs}
                updateInitiative={this.updateInitiative}
                MaximizeAdjuster={this.MaximizeAdjuster}
                MinimizeAdjuster={this.MinimizeAdjuster}
                addTutorialShow={this.state.addTutorialShow}
                addTutorialOff={this.addTutorialOff}
              />
            </div>
          </div>

          <RulesHelper />
        </div>
      );
    }

    return <div>{encounter}</div>;
  }
}

InteractiveEncounter.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  editEncounter: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  openGamingLicense: PropTypes.func.isRequired,
  noEncounterTutorial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    editEncounter,
    openGamingLicense,
    getCurrentProfile,
    noEncounterTutorial
  }
)(withRouter(InteractiveEncounter));
