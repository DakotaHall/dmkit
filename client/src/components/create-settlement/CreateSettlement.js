import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  createSettlement,
  getCurrentProfile,
  noSettlementTutorial
} from "../../actions/profileActions";
import SettlementBuildings from "./SettlementBuildings/SettlementBuildings";
import SettlementOrganizations from "./SettlementOrganizations/SettlementOrganizations";
import SettlementNPCs from "./SettlementNPCs/SettlementNPCs";
import CreateNPC from "./CreateNPC";
import SettlementNPC from "./SettlementNPCs/SettlementNPC";
import SettlementOrganization from "./SettlementOrganizations/SettlementOrganization";
import SettlementBuilding from "./SettlementBuildings/SettlementBuilding";
import Book from "../../images/book_dmkit_cropped.png";
import classnames from "classnames";
import ArrowLeft from "../../images/blue_arrow_left.png";
import ArrowRight from "../../images/blue_arrow_right.png";
import BluePlus from "../../images/blue_plus_button.png";
import Spinner from "../common/Spinner";
import GrayPlus from "../../images/gray_plus_button.png";
import BlueX from "../../images/blue_x.png";
import GrayX from "../../images/gray_x.png";
import DefaultImage from "../../images/npc_default_image.png";
import GreenCheckmark from "../../images/green_check_button.png";
import Wizard from "../../images/booboo.png";

class CreateSettlement extends Component {
  state = {
    name: "",
    image: "",
    population: 0,
    environment: "",
    government: "",
    commerce: "",
    laws: "",
    description: "",
    organizations: [],
    buildings: [],
    NPCs: [],
    errors: {},
    neededProfile: "",
    premadeNPCs: [],
    showEditNPC: "SettlementCreateNPCHidden",
    editNPCDisplay: "",
    settlementNPCs: "CharacterClicked",
    settlementOrganizations: "CharacterUnclicked",
    settlementBuildings: "CharacterUnclicked",
    showSettlementNPCs: "ShowSettlementSection",
    showSettlementOrganizations: "HideCharacterSection",
    showSettlementBuildings: "HideCharacterSection",
    disabled: false,
    file: "",
    settlementNPCIndex: "",
    settlementOrganizationIndex: "",
    settlementOrganizationNPCIndex: "",
    settlementBuildingIndex: "",
    settlementBuildingNPCIndex: "",
    settlementOrganizationNPCType: "",
    settlementBuildingNPCType: "",
    createNPC: "",
    createNPCDisplay: "",
    addNPC: "SettlementAddNPCHidden",
    displayIndex: 0,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    addNPCValue: "Hidden",
    addNPCIndex: "",
    arrowLeft: "ArrowLeftBook",
    arrowRight: "ArrowRightBook",
    hovered: false,
    hoveredArray: [],
    greenCheckArray: [],
    xHovered: false,
    npcAddedText: <div className="Hidden" />,
    reset: false,
    timers: [],
    organizationMaximize: false,
    buildingMaximize: false,
    tutorialPane: 1,
    tutorialText:
      'Hey! Welcome to the "Add an NPC" section of the Settlement page! The NPCs on this page are comprised of both NPCs you have created via the "Create NPC" page and the NPCs you create within this particular settlement.',
    showTutorial: false,
    tutorialPreviousDisplay: "Hidden",
    tutorialNextDisplay: "",
    neverShow: false,
    editedNPCs: [],
    addTutorialShow: true
  };

  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  componentDidMount = () => {};

 UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.profile.profile !== this.props.profile.profile) {
      this.setState(
        {
          neededProfile: this.props.profile.profile,
          premadeNPCs: this.props.profile.profile.NPCs
        },
        () => {
          let newHoveredArray = [];
          let newGreenCheckArray = [];
          for (let i = 0; i < this.state.premadeNPCs.length; i++) {
            let newHover = {
              hovered: false
            };
            newHoveredArray.push(newHover);
            let newGreenCheck = {
              greenCheck: false
            };
            newGreenCheckArray.push(newGreenCheck);
          }

          this.setState({
            hoveredArray: newHoveredArray,
            greenCheckArray: newGreenCheckArray
          });
        }
      );
    }
  };

  onSubmit = e => {
    let newSettlement = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      population: this.state.population,
      environment: this.state.environment,
      government: this.state.government,
      laws: this.state.laws,
      commerce: this.state.commerce,
      organizations: this.state.organizations,
      NPCs: this.state.NPCs,
      buildings: this.state.buildings,
      editedNPCs: this.state.editedNPCs
    };
    this.props.createSettlement(newSettlement, this.props.history);
  };

  showSettlementInfo = () => {};

  onChange = e => {
    if (e.target.name === "neverShow") {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  updateOrganizations = updatedOrganizations => {
    this.setState({ organizations: updatedOrganizations });
  };

  updateNPCs = updatedNPCs => {
    this.setState({ NPCs: updatedNPCs });
  };

  updateBuildings = updatedBuildings => {
    this.setState({ buildings: updatedBuildings });
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

  addNPC = (npc, npcId) => {
    let newNPCs = this.state.NPCs;
    newNPCs.push(npcId);
    let showNPCs = [];
    for (let i = 0; i < this.state.NPCs.length; i++) {
      let newNPC = (
        <SettlementNPC
          key={`SettlementNPC${i}`}
          size="SettlementNPCDisplay"
          NPC={this.state.NPCs[i]}
          npcIndex={i}
          showNPC={this.showNPC}
          hideNPC={this.hideNPC}
          removeNPC={this.removeNPC}
          changeNPC={this.changeNPC}
          npcValue="NPC"
          premadeNPCs={this.state.premadeNPCs}
        />
      );
      showNPCs.push(newNPC);
    }

    let npcName = this.state.premadeNPCs[npc].name;

    this.setState(
      {
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npcName} successfully added to Notable NPCs!
            </div>
          </div>
        ),
        reset: true,
        NPCs: newNPCs,
        createNPCDisplay: "",
        editNPCDisplay: ""
      },
      () => {
        this.fadeTextTwo(npc);
      }
    );
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

  addOrganization = Organization => {
    this.setState({ organizations: Organization });
  };

  addBuilding = Building => {
    this.setState({ buildings: Building });
  };

  removeNPC = index => {
    let newNPCs = this.state.NPCs;
    newNPCs.splice(index, 1);
    this.setState({ NPCs: newNPCs }, () => {
      this.hideNPC();
    });
  };

  removeOrganization = index => {
    let newOrganizations = this.state.organizations;
    newOrganizations.splice(index, 1);
    this.setState({ organizations: newOrganizations });
  };

  removeBuilding = index => {
    let newBuildings = this.state.buildings;
    newBuildings.splice(index, 1);
    this.setState({ buildings: newBuildings });
  };

  addCreatedNPC = npc => {
    let newPremadeNPCs = this.state.premadeNPCs;
    let editedNPCs = this.state.editedNPCs;
    newPremadeNPCs.push(npc);
    editedNPCs.push(npc);

    let newHoveredArray = [];
    let newGreenCheckArray = [];
    for (let i = 0; i < newPremadeNPCs.length; i++) {
      let newHover = {
        hovered: false
      };
      let newGreenCheck = {
        greenCheck: false
      };
      newHoveredArray.push(newHover);
      newGreenCheckArray.push(newGreenCheck);
    }
    this.setState({
      premadeNPCs: newPremadeNPCs,
      hoveredArray: newHoveredArray,
      greenCheckArray: newGreenCheckArray,
      editedNPCs: editedNPCs
    });
  };

  editNPC = (npc, index) => {
    let oldState = this.state.premadeNPCs;
    oldState[index] = npc;
    this.setState({ premadeNPCs: oldState });
  };

  minimizeEditCharacter = () => {
    this.setState({
      showEditNPC: "SettlementCreateNPCHidden",
      editNPCDisplay: ""
    });
  };

  showEditNPC = npcIndex => {
    let npcDisplay = (
      <CreateNPC
        createNPCvalue="EditNPC"
        editNPC={this.editNPC}
        hideEditNPC={this.hideEditNPC}
        neededProfile={this.state.neededProfile}
        npc={this.state.premadeNPCs[npcIndex]}
        index={npcIndex}
        minimizeEditCharacter={this.minimizeEditCharacter}
      />
    );
    this.setState({
      showEditNPC: "SettlementCreateNPC",
      editNPCDisplay: npcDisplay
    });
  };

  hideEditNPC = () => {
    this.setState({
      showEditNPC: "SettlementCreateNPCHidden",
      editNPCDisplay: ""
    });
  };

  changeNPC = (npcIndex, npcData) => {
    let neededNPCIndex = this.state.premadeNPCs.findIndex(
      x => x._id === npcData._id
    );
    let oldState = this.state.premadeNPCs;
    let editedNPCs = this.state.editedNPCs;
    let editedNPCIndex = editedNPCs.findIndex(x => x._id === npcData._id);
    if (editedNPCIndex === -1) {
      editedNPCs.push(npcData);
    } else {
      editedNPCs[editedNPCIndex] = npcData;
    }
    oldState[neededNPCIndex] = npcData;
    this.setState({ premadeNPCs: oldState, editedNPCs: editedNPCs });
  };

  changeOrganization = (organizationIndex, organizationData) => {
    let oldState = this.state.organizations;
    oldState[organizationIndex] = organizationData;
    this.setState({ organizations: oldState });
  };

  changeBuilding = (buildingIndex, buildingData) => {
    let oldState = this.state.buildings;
    oldState[buildingIndex] = buildingData;
    this.setState({ buildings: oldState });
  };

  viewNPCs = () => {
    this.setState({
      showSettlementNPCs: "ShowSettlementSection",
      showSettlementOrganizations: "HideCharacterSection",
      showSettlementBuildings: "HideCharacterSection",
      settlementNPCs: "CharacterClicked",
      settlementOrganizations: "CharacterUnclicked",
      settlementBuildings: "CharacterUnclicked"
    });
  };

  viewOrganizations = () => {
    this.setState({
      showSettlementNPCs: "HideCharacterSection",
      showSettlementOrganizations: "ShowSettlementSection",
      showSettlementBuildings: "HideCharacterSection",
      settlementNPCs: "CharacterUnclicked",
      settlementOrganizations: "CharacterClicked",
      settlementBuildings: "CharacterUnclicked"
    });
  };

  viewBuildings = () => {
    this.setState({
      showSettlementNPCs: "HideCharacterSection",
      showSettlementOrganizations: "HideCharacterSection",
      showSettlementBuildings: "ShowSettlementSection",
      settlementNPCs: "CharacterUnclicked",
      settlementOrganizations: "CharacterUnclicked",
      settlementBuildings: "CharacterClicked"
    });
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          image: reader.result
        },
        () => {
          var img = new Image();
          img.onload = () => {
            let wantedWidth;
            let wantedHeight;
            if (img.width > img.height) {
              let ratio = img.width / img.height;
              wantedWidth = 366;
              wantedHeight = wantedWidth / ratio;
              while (wantedHeight > 128) {
                wantedWidth -= 1;
                wantedHeight = wantedWidth / ratio;
              }
            } else {
              let ratio = img.height / img.width;
              wantedHeight = 128;
              wantedWidth = wantedHeight / ratio;
            }
            this.resizedataURL(this.state.image, wantedWidth, wantedHeight);
          };
          img.src = this.state.image;
        }
      );
    };
    if (file !== undefined) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsDataURL(this.state.file);
    }
  };
  resizedataURL = (datas, wantedWidth, wantedHeight) => {
    var img = document.createElement("img");
    let globalObject = this;
    img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      canvas.width = wantedWidth;
      canvas.height = wantedHeight;

      ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

      var dataURI = canvas.toDataURL();
      globalObject.setState({ image: dataURI });
    };

    img.src = datas;
  };

  showNPC = index => {
    this.setState({ settlementNPCIndex: index });
  };

  showOrganizationNPC = (organizationIndex, npcIndex, npcType) => {
    this.setState({
      settlementOrganizationIndex: organizationIndex,
      settlementOrganizationNPCIndex: npcIndex,
      settlementOrganizationNPCType: npcType
    });
  };
  showBuildingNPC = (buildingIndex, npcIndex, npcType) => {
    this.setState({
      settlementBuildingIndex: buildingIndex,
      settlementBuildingNPCIndex: npcIndex,
      settlementBuildingNPCType: npcType
    });
  };

  hideNPC = () => {
    this.setState({
      settlementNPCIndex: "",
      settlementOrganizationIndex: "",
      settlementOrganizationNPCIndex: "",
      settlementOrganizationNPCType: "",
      settlementBuildingIndex: "",
      settlementBuildingNPCIndex: "",
      settlementBuildingNPCType: ""
    });
  };

  removeOrganizationLeader = (organizationIndex, npcIndex, e) => {
    let oldState = this.state.organizations;
    oldState[organizationIndex].organization_leaders.splice(npcIndex, 1);
    this.setState({ organizations: oldState }, () => {
      this.hideNPC();
    });
  };
  removeOrganizationMember = (organizationIndex, npcIndex, e) => {
    let oldState = this.state.organizations;
    oldState[organizationIndex].organization_members.splice(npcIndex, 1);
    this.setState({ organizations: oldState }, () => {
      this.hideNPC();
    });
  };
  removeBuildingOwner = (buildingIndex, npcIndex, e) => {
    let oldState = this.state.buildings;
    oldState[buildingIndex].building_owners.splice(npcIndex, 1);
    this.setState({ buildings: oldState }, () => {
      this.hideNPC();
    });
  };
  removeBuildingWorker = (buildingIndex, npcIndex, e) => {
    let oldState = this.state.buildings;
    oldState[buildingIndex].building_workers.splice(npcIndex, 1);
    this.setState({ buildings: oldState }, () => {
      this.hideNPC();
    });
  };
  changeOrganizationLeader = (
    organizationIndex,
    organizationLeaderIndex,
    organizationLeaderData
  ) => {
    let neededNPCIndex = this.state.premadeNPCs.findIndex(
      x => x._id === organizationLeaderData._id
    );
    let oldState = this.state.premadeNPCs;
    oldState[neededNPCIndex] = organizationLeaderData;
    this.setState({ premadeNPCs: oldState });
  };
  changeOrganizationMember = (
    organizationIndex,
    organizationMemberIndex,
    organizationMemberData
  ) => {
    let neededNPCIndex = this.state.premadeNPCs.findIndex(
      x => x._id === organizationMemberData._id
    );
    let oldState = this.state.premadeNPCs;
    oldState[neededNPCIndex] = organizationMemberData;
    this.setState({ premadeNPCs: oldState });
  };
  changeBuildingWorker = (
    buildingIndex,
    buildingWorkerIndex,
    buildingWorkerData
  ) => {
    let neededNPCIndex = this.state.premadeNPCs.findIndex(
      x => x._id === buildingWorkerData._id
    );
    let oldState = this.state.premadeNPCs;
    oldState[neededNPCIndex] = buildingWorkerData;
    this.setState({ premadeNPCs: oldState });
  };
  changeBuildingOwner = (
    buildingIndex,
    buildingOwnerIndex,
    buildingOwnerData
  ) => {
    let neededNPCIndex = this.state.premadeNPCs.findIndex(
      x => x._id === buildingOwnerData._id
    );
    let oldState = this.state.premadeNPCs;
    oldState[neededNPCIndex] = buildingOwnerData;
    this.setState({ premadeNPCs: oldState });
  };

  showCreateNewNPC = () => {
    let newNPC = {
      name: "",
      image: "",
      description: "",
      challenge_rating: "",
      race: "",
      background: "",
      factions: "",
      alignment: "",
      inspiration: "",
      proficiency_bonus: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      strength_save: "",
      dexterity_save: "",
      constitution_save: "",
      intelligence_save: "",
      wisdom_save: "",
      charisma_save: "",
      acrobatics: "",
      animal_handling: "",
      arcana: "",
      athletics: "",
      deception: "",
      history: "",
      insight: "",
      intimidation: "",
      investigation: "",
      medicine: "",
      nature: "",
      perception: "",
      performance: "",
      persuasion: "",
      religion: "",
      sleight_of_hand: "",
      stealth: "",
      survival: "",
      acrobatics_proficiency: false,
      animal_handling_proficiency: false,
      arcana_proficiency: false,
      athletics_proficiency: false,
      deception_proficiency: false,
      history_proficiency: false,
      insight_proficiency: false,
      intimidation_proficiency: false,
      investigation_proficiency: false,
      medicine_proficiency: false,
      nature_proficiency: false,
      perception_proficiency: false,
      performance_proficiency: false,
      persuasion_proficiency: false,
      religion_proficiency: false,
      sleight_of_hand_proficiency: false,
      stealth_proficiency: false,
      survival_proficiency: false,
      passive_perception: "",
      other_proficiencies_and_languages: "",
      armor_class: "",
      initiative: "",
      speed: "",
      current_hit_points: "",
      temporary_hit_points: "",
      hit_dice: "",
      death_successes: "",
      death_failures: "",
      spellcasting_ability: "",
      spell_save_dc: "",
      spell_attack_bonus: "",
      actions: [],
      action_names: [""],
      action_descs: [""],
      action_attack_bonuses: [""],
      action_damage_bonuses: [""],
      action_damage_dices: [""],
      actions_name: "",
      actions_desc: "",
      actions_attack_bonus: "",
      actions_damage_dice: "",
      actions_damage_bonus: "",
      spells: [],
      spell_names: [],
      spell_casting_times: [],
      spell_ranges: [],
      spell_durations: [],
      spell_descriptions: [],
      spell_levels: [],
      spell_schools: [],
      spell_components: [],
      features_and_traits: [],
      features_and_traits_names: [""],
      features_and_traits_descriptions: [""],
      information: "",
      behavior: "",
      equipment: "",
      spellsShow: [],
      cantrips: [],
      first_level_spells: [],
      second_level_spells: [],
      third_level_spells: [],
      fourth_level_spells: [],
      fifth_level_spells: [],
      sixth_level_spells: [],
      seventh_level_spells: [],
      eighth_level_spells: [],
      ninth_level_spells: [],
      showAddSpell: "Hidden",
      addSpellName: "",
      addSpellLevel: "",
      addSpellSchool: "",
      addSpellCastingTime: "",
      addSpellRange: "",
      addSpellComponents: "",
      addSpellDuration: "",
      addSpellDescription: "",
      first_level_spell_slots: "",
      second_level_spell_slots: "",
      third_level_spell_slots: "",
      fourth_level_spell_slots: "",
      fifth_level_spell_slots: "",
      sixth_level_spell_slots: "",
      seventh_level_spell_slots: "",
      eighth_level_spell_slots: "",
      ninth_level_spell_slots: "",
      copper: "",
      silver: "",
      gold: "",
      electrum: "",
      platinum: "",
      showCharacterActions: "ShowCombatHolder",
      showCharacterSpells: "HideCharacterSection",
      showCharacterFeatures: "HideCharacterSection",
      showCharacterAppearance: "ShowCharacterSection",
      showCharacterQualities: "HideCharacterSection",
      showCharacterBackstory: "HideCharacterSection",
      backstory: "",
      age: "",
      height: "",
      weight: "",
      eyes: "",
      skin: "",
      hair: "",
      damage_vulnerabilities: "",
      damage_resistances: "",
      damage_immunities: "",
      condition_immunities: ""
    };

    this.setState({ createNPC: "ShowCreateNPC" }, () => {
      let createNPC = (
        <CreateNPC
          createNPCvalue="NPC"
          npc={newNPC}
          addCreatedNPC={this.addCreatedNPC}
          hideCreateNewNPC={this.hideCreateNewNPC}
          neededProfile={this.state.neededProfile}
          minimizeEditCharacter={this.minimizeEditCharacter}
        />
      );
      this.setState({ createNPCDisplay: createNPC });
    });
  };

  createNewNPC = npc => {
    this.addCreatedNPC(npc);
  };

  hideCreateNewNPC = () => {
    this.setState({
      createNPC: "SettlementCreateNPCHidden",
      createNPCDisplay: null
    });
  };

  showAddNPC = () => {
    this.setState({ addNPC: "SettlementAddNPCShow" });
  };
  hideAddNPC = () => {
    let hoveredArray = this.state.hoveredArray;
    let greenCheckArray = this.state.greenCheckArray;
    for (let i = 0; i < greenCheckArray.length; i++) {
      greenCheckArray[i].greenCheck = false;
      hoveredArray[i].hovered = false;
    }

    this.setState({
      addNPC: "SettlementAddNPCHidden",
      addNPCValue: "Hidden",
      xHovered: false,
      hoveredArray: hoveredArray,
      greenCheckArray: greenCheckArray
    });
  };

  minimizeEditCharacter = () => {
    this.setState({
      createNPC: "SettlementCreateNPCHidden",
      createNPCDisplay: ""
    });
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

  addBuildingOwner = (npc, index, npcId) => {
    let buildings = this.state.buildings;
    buildings[index].building_owners.push(npcId);
    let npcName = this.state.premadeNPCs[npc].name;
    let buildingName = buildings[index].name;
    this.setState(
      {
        buildings: buildings,
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npcName} successfully added to {buildingName} owners!
            </div>
          </div>
        )
      },
      () => {
        this.fadeTextTwo(npc);
      }
    );
  };

  addBuildingWorker = (npc, index, npcId) => {
    let buildings = this.state.buildings;
    buildings[index].building_workers.push(npcId);
    let npcName = this.state.premadeNPCs[npc].name;
    let buildingName = buildings[index].name;
    this.setState(
      {
        buildings: buildings,
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npcName} successfully added to {buildingName} workers!
            </div>
          </div>
        )
      },
      () => {
        this.fadeTextTwo(npc);
      }
    );
  };

  addOrganizationLeader = (npc, index, npcId) => {
    let organizations = this.state.organizations;
    organizations[index].organization_leaders.push(npcId);
    let npcName = this.state.premadeNPCs[npc].name;
    let organizationName = organizations[index].name;
    this.setState(
      {
        organizations: organizations,
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npcName} successfully added to {organizationName} leaders!
            </div>
          </div>
        )
      },
      () => {
        this.fadeTextTwo(npc);
      }
    );
  };

  addOrganizationMember = (npc, index, npcId) => {
    let organizations = this.state.organizations;
    organizations[index].organization_members.push(npcId);
    let npcName = this.state.premadeNPCs[npc].name;
    let organizationName = organizations[index].name;
    this.setState(
      {
        organizations: organizations,
        npcAddedText: (
          <div className="NPCAddedText">
            <div className="CenteredPlus">
              {npcName} successfully added to {organizationName} members!
            </div>
          </div>
        )
      },
      () => {
        this.fadeTextTwo(npc);
      }
    );
  };

  addNPCHelper = (index, npcType) => {
    this.setState({
      addNPCValue: npcType,
      addNPCIndex: index,
      showTutorial: true
    });
  };

  changeOrganizationMaximize = () => {
    if (this.state.organizationMaximize === false) {
      this.setState({ organizationMaximize: true });
    } else {
      this.setState({ organizationMaximize: false });
    }
  };
  changeBuildingMaximize = () => {
    if (this.state.buildingMaximize === false) {
      this.setState({ buildingMaximize: true });
    } else {
      this.setState({ buildingMaximize: false });
    }
  };

  changeBuildingMaximize = () => {
    if (this.state.buildingMaximize === false) {
      this.setState({ buildingMaximize: true });
    } else {
      this.setState({ buildingMaximize: false });
    }
  };

  nextTutorialPane = () => {
    if (this.state.tutorialPane === 1) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'When you create an NPC within a settlement, that NPC can only be freely added to that particular settlement. If you wish to have an NPC be used in multiple settlements, it is recommended that you create that NPC via the "Create NPC" page located on the "NPCs" page that you can access by clicking the "View" button within the NPC section on the Dashboard.',
        tutorialPreviousDisplay: ""
      });
    } else if (this.state.tutorialPane === 2) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'As you can see, each NPC has a button with a "+" on it. When this button is clicked, the NPC will be added to whatever specific section of the settlement you were in. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you what section you have added the NPC to.'
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 4,
        tutorialText:
          'When NPCs are edited within a settlement, the values of the NPC change for every instance of that NPC inside the settlement. This means that if you edit an NPC within the "Notable NPCs" section, its values will also be changed in any organizations or buildings. This change applies to all current instances of the NPC and all future additions.',
        tutorialNextDisplay: "Hidden"
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
          'Hey! Welcome to the "Add an NPC" section of the Settlement page! The NPCs on this page are comprised of both NPCs you have via the "Create NPC" page and the NPCs you create within this particular settlement.',
        tutorialPreviousDisplay: "Hidden"
      });
    } else if (this.state.tutorialPane === 3) {
      this.setState({
        tutorialPane: 2,
        tutorialText:
          'When you create an NPC within a settlement, that NPC can only be freely added to that particular settlement. If you wish to have an NPC be used in multiple settlements, it is recommended that you create that NPC via the "Create NPC" page located on the "NPCs" page that you can access by clicking the "View" button within the NPC section on the Dashboard.'
      });
    } else if (this.state.tutorialPane === 4) {
      this.setState({
        tutorialPane: 3,
        tutorialText:
          'As you can see, each NPC has a button with a "+" on it. When this button is clicked, the NPC will be added to whatever specific section of the settlement you were in. This is signified by a green checkmark replacing the usual "+" and a text notification slightly underneath the navbar which will tell you what section you have added the NPC to.',
        tutorialNextDisplay: ""
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
        this.disableSettlementTutorial();
      });
    } else {
      this.setState({ showTutorial: false });
    }
    this.addTutorialOff();
  };

  disableSettlementTutorial = () => {
    this.props.noSettlementTutorial();
  };

  addTutorialOff = () => {
    this.setState({ addTutorialShow: false });
  };

  render() {
    const { errors, image } = this.state;
    const { profile, loading } = this.props.profile;
    let imagePreview = null;
    if (image) {
      imagePreview = (
        <img className="EditCharacterImageDisplay" src={image} alt="" />
      );
    }
    if (profile === null || loading === true) {
      return <Spinner />;
    } else {
      let showTutorialPane;
      if (profile.settlement_tutorial !== false) {
        if (this.state.showTutorial && this.state.addTutorialShow) {
          showTutorialPane = (
            <div className="DarkOverlay">
              <div className="WizardHolder">
                <img className="ImageFill" src={Wizard} alt="" />
              </div>
              <div className="Encounter1">
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

      let showNPCs = [];
      for (let i = 0; i < this.state.NPCs.length; i++) {
        let neededNPC = this.state.premadeNPCs.find(
          x => x._id === this.state.NPCs[i]
        );
        let newNPC = (
          <SettlementNPC
            key={`SettlementNPC${i}`}
            size="SettlementNPCDisplay"
            showNPC={this.showNPC}
            hideNPC={this.hideNPC}
            changeNPC={this.changeNPC}
            NPC={neededNPC}
            neededId={this.state.NPCs[i]}
            npcIndex={i}
            removeNPC={this.removeNPC}
            npcValue="NPC"
            premadeNPCs={this.state.premadeNPCs}
          />
        );
        showNPCs.push(newNPC);
      }
      let showOrganizations = [];
      for (let i = 0; i < this.state.organizations.length; i++) {
        let newOrganization = (
          <SettlementOrganization
            key={`SettlementOrganization${i}`}
            addNPCHelper={this.addNPCHelper}
            showOrganizationNPC={this.showOrganizationNPC}
            hideNPC={this.hideNPC}
            changeOrganization={this.changeOrganization}
            organization={this.state.organizations[i]}
            changeNPC={this.changeNPC}
            organizationIndex={i}
            removeOrganization={this.removeOrganization}
            removeOrganizationLeader={this.removeOrganizationLeader}
            removeOrganizationMember={this.removeOrganizationMember}
            addCreatedNPC={this.addCreatedNPC}
            showEditNPC={this.showEditNPC}
            premadeNPCs={this.state.premadeNPCs}
            changeOrganizationMaximize={this.changeOrganizationMaximize}
          />
        );
        showOrganizations.push(newOrganization);
      }

      let showBuildings = [];
      for (let i = 0; i < this.state.buildings.length; i++) {
        let newBuilding = (
          <SettlementBuilding
            key={`SettlementBuilding${i}`}
            addNPCHelper={this.addNPCHelper}
            showBuildingNPC={this.showBuildingNPC}
            hideNPC={this.hideNPC}
            changeBuilding={this.changeBuilding}
            changeNPC={this.changeNPC}
            building={this.state.buildings[i]}
            buildingIndex={i}
            premadeNPCs={this.state.premadeNPCs}
            removeBuilding={this.removeBuilding}
            addCreatedNPC={this.addCreatedNPC}
            showEditNPC={this.showEditNPC}
            removeBuildingOwner={this.removeBuildingOwner}
            removeBuildingWorker={this.removeBuildingWorker}
            changeBuildingMaximize={this.changeBuildingMaximize}
          />
        );
        showBuildings.push(newBuilding);
      }

      let showMaximizedNPC = null;
      if (this.state.settlementNPCIndex !== "") {
        let neededNPC = this.state.premadeNPCs.find(
          x => x._id === this.state.NPCs[this.state.settlementNPCIndex]
        );
        showMaximizedNPC = (
          <div className="ImageFillTest">
            <SettlementNPC
              key={`SettlementNPC${this.state.settlementNPCIndex}`}
              size="SettlementNPCDisplayMaximized"
              showNPC={this.showNPC}
              hideNPC={this.hideNPC}
              changeNPC={this.changeNPC}
              neededId={this.state.NPCs[this.state.settlementNPCIndex]}
              NPC={neededNPC}
              npcIndex={this.state.settlementNPCIndex}
              removeNPC={this.removeNPC}
              npcValue="NPC"
              premadeNPCs={this.state.premadeNPCs}
            />
          </div>
        );
      } else if (this.state.settlementOrganizationNPCType === "leader") {
        let neededNPC = this.state.premadeNPCs.find(
          x =>
            x._id ===
            this.state.organizations[this.state.settlementOrganizationIndex]
              .organization_leaders[this.state.settlementOrganizationNPCIndex]
        );
        showMaximizedNPC = (
          <div className="ImageFillTest">
            <SettlementNPC
              key={`SettlementOrganizationLeader${
                this.state.settlementOrganizationNPCIndex
              }`}
              size="SettlementNPCDisplayMaximized"
              showOrganizationNPC={this.showOrganizationNPC}
              hideNPC={this.hideNPC}
              changeNPC={this.changeNPC}
              NPC={neededNPC}
              neededId={
                this.state.organizations[this.state.settlementOrganizationIndex]
                  .organization_leaders[
                  this.state.settlementOrganizationNPCIndex
                ]
              }
              npcIndex={this.state.settlementOrganizationNPCIndex}
              organizationIndex={this.state.settlementOrganizationIndex}
              removeOrganizationLeader={this.removeOrganizationLeader}
              npcValue="OrganizationLeader"
              premadeNPCs={this.state.premadeNPCs}
            />
          </div>
        );
      } else if (this.state.settlementOrganizationNPCType === "member") {
        let neededNPC = this.state.premadeNPCs.find(
          x =>
            x._id ===
            this.state.organizations[this.state.settlementOrganizationIndex]
              .organization_members[this.state.settlementOrganizationNPCIndex]
        );
        showMaximizedNPC = (
          <div className="ImageFillTest">
            <SettlementNPC
              key={`SettlementOrganizationMember${
                this.state.settlementOrganizationNPCIndex
              }`}
              size="SettlementNPCDisplayMaximized"
              showOrganizationNPC={this.showOrganizationNPC}
              hideNPC={this.hideNPC}
              NPC={neededNPC}
              neededId={
                this.state.organizations[this.state.settlementOrganizationIndex]
                  .organization_members[
                  this.state.settlementOrganizationNPCIndex
                ]
              }
              npcIndex={this.state.settlementOrganizationNPCIndex}
              organizationIndex={this.state.settlementOrganizationIndex}
              removeOrganizationMember={this.removeOrganizationMember}
              npcValue="OrganizationMember"
              premadeNPCs={this.state.premadeNPCs}
            />
          </div>
        );
      } else if (this.state.settlementBuildingNPCType === "owner") {
        let neededNPC = this.state.premadeNPCs.find(
          x =>
            x._id ===
            this.state.buildings[this.state.settlementBuildingIndex]
              .building_owners[this.state.settlementBuildingNPCIndex]
        );
        showMaximizedNPC = (
          <div className="ImageFillTest">
            <SettlementNPC
              key={`SettlementBuildingOwner${
                this.state.settlementBuildingNPCIndex
              }`}
              size="SettlementNPCDisplayMaximized"
              showBuildingNPC={this.showBuildingNPC}
              hideNPC={this.hideNPC}
              changeNPC={this.changeNPC}
              NPC={neededNPC}
              npcIndex={this.state.settlementBuildingNPCIndex}
              buildingIndex={this.state.settlementBuildingIndex}
              removeBuildingOwner={this.removeBuildingOwner}
              npcValue="BuildingOwner"
              premadeNPCs={this.state.premadeNPCs}
            />
          </div>
        );
      } else if (this.state.settlementBuildingNPCType === "worker") {
        let neededNPC = this.state.premadeNPCs.find(
          x =>
            x._id ===
            this.state.buildings[this.state.settlementBuildingIndex]
              .building_workers[this.state.settlementBuildingNPCIndex]
        );
        showMaximizedNPC = (
          <div className="ImageFillTest">
            <SettlementNPC
              key={`SettlementBuildingWorker${
                this.state.settlementBuildingNPCIndex
              }`}
              size="SettlementNPCDisplayMaximized"
              showBuildingNPC={this.showBuildingNPC}
              hideNPC={this.hideNPC}
              NPC={neededNPC}
              npcIndex={this.state.settlementBuildingNPCIndex}
              buildingIndex={this.state.settlementBuildingIndex}
              removeBuildingWorker={this.removeBuildingWorker}
              npcValue="BuildingWorker"
              premadeNPCs={this.state.premadeNPCs}
            />
          </div>
        );
      }
      let addNPCDisplayList = [];

      if (this.state.addNPCValue === "NPC") {
        addNPCDisplayList = this.state.premadeNPCs.map((npc, index) => {
          let image;
          if (npc.image !== "") {
            image = (
              <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
            );
          } else {
            image = (
              <img
                className="ViewPageDisplayImage"
                src={DefaultImage}
                alt="npc"
              />
            );
          }
          let plusImage;

          if (this.state.NPCs.length >= 200) {
            plusImage = (
              <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
            );
          } else if (this.state.greenCheckArray[index].greenCheck === true) {
            plusImage = (
              <img
                src={GreenCheckmark}
                alt="+"
                className="ImageFill"
                onClick={this.addNPC.bind(this, index, npc._id)}
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
                onClick={this.addNPC.bind(this, index, npc._id)}
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
              key={`PremadeNPC${this.state.premadeNPCs.indexOf(npc)}`}
              className="ViewPageCharacter"
            >
              <div className="ViewPageDisplayImageHolder">{image}</div>

              <div className="ViewPageDisplayNameSettlementNPC">{npc.name}</div>

              <div className="LowerCenteredImageHolder">
                <div className="LowerCenteredImage">
                  <div className="CenteredImage">{plusImage}</div>
                </div>
              </div>
            </div>
          );
        });
      } else if (this.state.addNPCValue === "OrganizationLeader") {
        addNPCDisplayList = this.state.premadeNPCs.map((npc, index) => {
          let plusImage;

          if (
            this.state.organizations[this.state.addNPCIndex]
              .organization_leaders.length >= 25
          ) {
            plusImage = (
              <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
            );
          } else if (this.state.greenCheckArray[index].greenCheck === true) {
            plusImage = (
              <img
                src={GreenCheckmark}
                alt="+"
                className="ImageFill"
                onClick={this.addOrganizationLeader.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
                onClick={this.addOrganizationLeader.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
          let image;
          if (npc.image !== "") {
            image = (
              <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
            );
          } else {
            image = (
              <img
                className="ViewPageDisplayImage"
                src={DefaultImage}
                alt="npc"
              />
            );
          }
          return (
            <div
              key={`OrganizationLeaderPremadeNPC${this.state.premadeNPCs.indexOf(
                npc
              )}`}
              className="ViewPageCharacter"
            >
              <div className="ViewPageDisplayImageHolder">{image}</div>

              <div className="ViewPageDisplayNameSettlementNPC">{npc.name}</div>

              <div className="LowerCenteredImageHolder">
                <div className="LowerCenteredImage">
                  <div className="CenteredImage">{plusImage}</div>
                </div>
              </div>
            </div>
          );
        });
      } else if (this.state.addNPCValue === "OrganizationMember") {
        addNPCDisplayList = this.state.premadeNPCs.map((npc, index) => {
          let plusImage;

          if (
            this.state.organizations[this.state.addNPCIndex]
              .organization_members.length >= 100
          ) {
            plusImage = (
              <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
            );
          } else if (this.state.greenCheckArray[index].greenCheck === true) {
            plusImage = (
              <img
                src={GreenCheckmark}
                alt="+"
                className="ImageFill"
                onClick={this.addOrganizationMember.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
                onClick={this.addOrganizationMember.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
          let image;
          if (npc.image !== "") {
            image = (
              <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
            );
          } else {
            image = (
              <img
                className="ViewPageDisplayImage"
                src={DefaultImage}
                alt="npc"
              />
            );
          }
          return (
            <div
              key={`OrganizationMemberPremadeNPC${this.state.premadeNPCs.indexOf(
                npc
              )}`}
              className="ViewPageCharacter"
            >
              <div className="ViewPageDisplayImageHolder">{image}</div>

              <div className="ViewPageDisplayNameSettlementNPC">{npc.name}</div>

              <div className="LowerCenteredImageHolder">
                <div className="LowerCenteredImage">
                  <div className="CenteredImage">{plusImage}</div>
                </div>
              </div>
            </div>
          );
        });
      } else if (this.state.addNPCValue === "BuildingOwner") {
        addNPCDisplayList = this.state.premadeNPCs.map((npc, index) => {
          let plusImage;

          if (
            this.state.buildings[this.state.addNPCIndex].building_owners
              .length >= 10
          ) {
            plusImage = (
              <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
            );
          } else if (this.state.greenCheckArray[index].greenCheck === true) {
            plusImage = (
              <img
                src={GreenCheckmark}
                alt="+"
                className="ImageFill"
                onClick={this.addBuildingOwner.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
                onClick={this.addBuildingOwner.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
          let image;
          if (npc.image !== "") {
            image = (
              <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
            );
          } else {
            image = (
              <img
                className="ViewPageDisplayImage"
                src={DefaultImage}
                alt="npc"
              />
            );
          }
          return (
            <div
              key={`BuildingOwnerPremadeNPC${this.state.premadeNPCs.indexOf(
                npc
              )}`}
              className="ViewPageCharacter"
            >
              <div className="ViewPageDisplayImageHolder">{image}</div>

              <div className="ViewPageDisplayNameSettlementNPC">{npc.name}</div>

              <div className="LowerCenteredImageHolder">
                <div className="LowerCenteredImage">
                  <div className="CenteredImage">{plusImage}</div>
                </div>
              </div>
            </div>
          );
        });
      } else if (this.state.addNPCValue === "BuildingWorker") {
        addNPCDisplayList = this.state.premadeNPCs.map((npc, index) => {
          let plusImage;

          if (
            this.state.buildings[this.state.addNPCIndex].building_workers
              .length >= 50
          ) {
            plusImage = (
              <img src={BlueX} alt="X" className="ImageFill NotAllowed" />
            );
          } else if (this.state.greenCheckArray[index].greenCheck === true) {
            plusImage = (
              <img
                src={GreenCheckmark}
                alt="+"
                className="ImageFill"
                onClick={this.addBuildingWorker.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
                onClick={this.addBuildingWorker.bind(
                  this,
                  index,
                  this.state.addNPCIndex,
                  npc._id
                )}
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
          let image;
          if (npc.image !== "") {
            image = (
              <img className="ViewPageDisplayImage" src={npc.image} alt="npc" />
            );
          } else {
            image = (
              <img
                className="ViewPageDisplayImage"
                src={DefaultImage}
                alt="npc"
              />
            );
          }
          return (
            <div
              key={`BuildingWorkerPremadeNPC${this.state.premadeNPCs.indexOf(
                npc
              )}`}
              className="ViewPageCharacter"
            >
              <div className="ViewPageDisplayImageHolder">{image}</div>

              <div className="ViewPageDisplayNameSettlementNPC">{npc.name}</div>

              <div className="LowerCenteredImageHolder">
                <div className="LowerCenteredImage">
                  <div className="CenteredImage">{plusImage}</div>
                </div>
              </div>
            </div>
          );
        });
      }
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
            onClick={this.showCreateNewNPC}
            onMouseLeave={this.changePlus}
          />
        );
      }

      let createNewNPC;
      if (addNPCDisplayList.length < 180) {
        createNewNPC = (
          <div key="CreateSettlementNPC" className="ViewPageCharacter">
            <div className="AddTextCreateSettlement">Create New NPC</div>
            <div className="LowerCenteredImageHolder">
              <div className="LowerCenteredImage">
                <div className="CenteredImage">{plusImage}</div>
              </div>
            </div>
          </div>
        );
        addNPCDisplayList.unshift(createNewNPC);
      }

      let leftSide = [];
      let rightSide = [];
      let npcDisplay = [];
      let displayIndex = this.state.displayIndex;

      for (let i = 0; i < addNPCDisplayList.length; i++) {
        npcDisplay.push(addNPCDisplayList[i]);
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
          if (Math.abs(displayIndex) >= npcDisplay.length) {
            displayIndex = 0;
          }
          let index = parseInt(displayIndex, 10);

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
      if (npcDisplay.length < this.state.displayIndex + 19) {
        rightArrow = null;
      } else {
        rightArrow = (
          <img
            src={ArrowRight}
            className={this.state.arrowRight}
            alt="right"
            onClick={this.arrowRight.bind(this, npcDisplay.length)}
          />
        );
      }
      let addNPC;
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
      if (this.state.addNPCValue === "Hidden") {
        addNPC = <div className="Hidden" />;
      } else {
        addNPC = (
          <div className="ImageFillTest DarkOverlayLowZIndex">
            {showTutorialPane}
            <div className="BookHolder">
              <img src={Book} alt="" className="ImageFill" />
            </div>
            {this.state.npcAddedText}
            {leftArrow}
            {rightArrow}
            <div className="BookPages">
              <div className="AddNPCCloseButton" onClick={this.hideAddNPC}>
                <div className="CenteredImage">{xImage}</div>
              </div>
              <div className={this.state.bookPageLeft}>{leftSide}</div>
              <div className={this.state.bookPageRight}>{rightSide}</div>
            </div>
          </div>
        );
      }
      let showNPCMaxOrAll;
      if (showMaximizedNPC === null) {
        showNPCMaxOrAll = (
          <SettlementNPCs
            addNPCHelper={this.addNPCHelper}
            showAddNPC={this.showAddNPC}
            showNPC={this.showNPC}
            hideNPC={this.hideNPC}
            updateNPCs={this.updateNPCs}
            showNPCs={showNPCs}
            NPCs={this.state.NPCs}
            premadeNPCs={this.state.premadeNPCs}
            removeNPC={this.removeNPC}
            addNPC={this.addNPC}
            addCreatedNPC={this.addCreatedNPC}
            editNPC={this.editNPC}
            neededProfile={profile}
            showEditNPC={this.showEditNPC}
          />
        );
      } else {
        showNPCMaxOrAll = <div className="Hidden" />;
      }

      return (
        <div className="ViewPageHolder">
          <div
            className="GoBackBook"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to leave this page? Unsaved changes will be lost."
                )
              ) {
                window.location = "/settlements";
              }
            }}
          >
            <div className="CenteredPlusNoColor">
              <i className="fas fa-arrow-left" />
              Go Back
            </div>
          </div>
          <div className={this.state.showEditNPC}>
            {this.state.editNPCDisplay}
          </div>
          {addNPC}
          {this.state.createNPCDisplay}

          {showMaximizedNPC}
          <div className="BookHolder">
            <img src={Book} alt="" className="ImageFill" />
          </div>
          <div
            onClick={this.onSubmit}
            className="BookSubmitButton ViewSettlementsColors"
          >
            <div className="ButtonColorHelper">
              <div className="CenteredPlusNoColor">Create Settlement</div>
            </div>
          </div>
          <div className="SettlementName">
            <div className="EditCharacterText">Name</div>
            <input
              maxLength="100"
              className={classnames("EditCharacterInput", {
                InvalidInput: errors.name
              })}
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
          </div>
          {errors.name && (
            <div className="SettlementNameError">{errors.name}</div>
          )}
          <div className="SettlementDescription">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Description
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="SettlementImage">
            <input
              name="image"
              type="file"
              onChange={e => this.handleImageChange(e)}
            />
          </div>

          <div className="SettlementPopulation">
            <div className="EditCharacterText">Population</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              type="number"
              name="population"
              value={this.state.population}
              onChange={this.onChange}
            />
          </div>
          <div className="SettlementEnvironment">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Environment
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="environment"
              value={this.state.environment}
              onChange={this.onChange}
            />
          </div>
          <div className="SettlementGovernment">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Government
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="government"
              value={this.state.government}
              onChange={this.onChange}
            />
          </div>
          <div className="SettlementLaws">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Laws
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="laws"
              value={this.state.laws}
              onChange={this.onChange}
            />
          </div>
          <div className="SettlementCommerce">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Commerce
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="commerce"
              value={this.state.commerce}
              onChange={this.onChange}
            />
          </div>
          <div className="EditSettlementImageHolder">{imagePreview}</div>
          <div className="EditSettlementHolder">
            <div
              className={`EditSettlementNPCs ${this.state.settlementNPCs}`}
              onClick={this.viewNPCs}
            >
              <div className="BuildingOwnersText">Notable NPCs</div>
            </div>
            <div className={this.state.showSettlementNPCs}>
              {showNPCMaxOrAll}
            </div>
            <div
              className={`EditSettlementOrganizations ${
                this.state.settlementOrganizations
              }`}
              onClick={this.viewOrganizations}
            >
              <div className="BuildingOwnersText">Organizations</div>
            </div>
            <div className={this.state.showSettlementOrganizations}>
              <SettlementOrganizations
                showNPC={this.showNPC}
                hideNPC={this.hideNPC}
                updateOrganizations={this.updateOrganizations}
                organizations={this.state.organizations}
                changeNPC={this.changeNPC}
                premadeNPCs={this.state.premadeNPCs}
                neededProfile={profile}
                addCreatedNPC={this.addCreatedNPC}
                editNPC={this.editNPC}
                showEditNPC={this.showEditNPC}
                addOrganization={this.addOrganization}
                removeOrganization={this.removeOrganization}
                removeOrganizationLeader={this.removeOrganizationLeader}
                removeOrganizationMember={this.removeOrganizationMember}
                showOrganizations={showOrganizations}
                organizationMaximized={this.state.organizationMaximize}
              />
            </div>
            <div
              className={`EditSettlementBuildings ${
                this.state.settlementBuildings
              }`}
              onClick={this.viewBuildings}
            >
              <div className="BuildingOwnersText">Buildings</div>
            </div>
            <div className={this.state.showSettlementBuildings}>
              <SettlementBuildings
                showNPC={this.showNPC}
                hideNPC={this.hideNPC}
                updateBuildings={this.updateBuildings}
                buildings={this.state.buildings}
                premadeNPCs={this.state.premadeNPCs}
                neededProfile={profile}
                changeNPC={this.changeNPC}
                addCreatedNPC={this.addCreatedNPC}
                editNPC={this.editNPC}
                showEditNPC={this.showEditNPC}
                addBuilding={this.addBuilding}
                removeBuilding={this.removeBuilding}
                removeBuildingOwner={this.removeBuildingOwner}
                removeBuildingWorker={this.removeBuildingWorker}
                showBuildings={showBuildings}
                buildingMaximized={this.state.buildingMaximize}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

CreateSettlement.propTypes = {
  createSettlement: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  noSettlementTutorial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    createSettlement,
    getCurrentProfile,
    noSettlementTutorial
  }
)(withRouter(CreateSettlement));
