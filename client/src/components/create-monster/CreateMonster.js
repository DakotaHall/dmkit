import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createMonster, getCurrentProfile } from "../../actions/profileActions";
import Book from "../../images/book_dmkit_cropped.png";
import classnames from "classnames";
import Spinner from "../common/Spinner";

class CreateMonster extends Component {
  state = {
    name: "",
    image: "",
    alignment: "",
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
    loot: "",
    armor_class: "",
    speed: "",
    hit_points: "",
    hit_dice: "",
    actions: [],
    action_names: [""],
    action_descs: [""],
    legendary_actions: [],
    legendary_action_names: [""],
    legendary_action_descs: [""],
    special_abilities: [],
    special_ability_names: [""],
    special_ability_descs: [""],
    regional_effects: [],

    regional_effect_descs: [""],
    lair_actions: [],

    lair_action_descs: [""],
    spells: [],
    spell_names: [],
    spell_schools: [],
    spell_components: [],
    spell_casting_times: [],
    spell_ranges: [],
    spell_durations: [],
    spell_descriptions: [],
    spell_levels: [],
    spellsShow: [],
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
    showCharacterActions: "ShowCombatHolder",
    showCharacterSpells: "HideCharacterSection",
    showCharacterLegendaryActions: "HideCharacterSection",
    showCharacterAppearance: "ShowCharacterSection",
    showCharacterInformation: "HideCharacterSection",
    showCharacterLoot: "HideCharacterSection",
    showCharacterSpecialAbilities: "ShowCombatHolder",
    showCharacterRegionalEffects: "HideCharacterSection",
    showCharacterLairActions: "HideCharacterSection",
    characterActions: "CharacterClicked",
    characterSpells: "CharacterUnclicked",
    characterLegendaryActions: "CharacterUnclicked",
    characterAppearance: "CharacterClicked",
    characterInformation: "CharacterUnclicked",
    characterSpecialAbilities: "CharacterClicked",
    characterRegionalEffects: "CharacterUnclicked",
    characterLairActions: "CharacterUnclicked",
    characterLoot: "CharacterUnclicked",
    spellcasting_ability: "",
    spell_save_dc: "",
    spell_attack_bonus: "",
    damage_vulnerabilities: "",
    damage_resistances: "",
    damage_immunities: "",
    condition_immunities: "",
    challenge_rating: "",
    size: "",
    type: "",
    subtype: "",
    senses: "",
    languages: "",
    information: "",
    description: "",
    errors: {},
    file: "",
    disabled: false
  };

  componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    let actionsArray = [];
    let legendaryActionsArray = [];
    let specialAbilitiesArray = [];
    let lairActionsArray = [];
    let regionalEffectsArray = [];
    let spellsArray = [];

    for (let i = 0; i < this.state.action_names.length; i++) {
      const newAction = {
        name: this.state.action_names[i],
        desc: this.state.action_descs[i]
      };
      actionsArray.push(newAction);
    }

    for (let i = 0; i < this.state.legendary_action_names.length; i++) {
      const newLegendaryAction = {
        name: this.state.legendary_action_names[i],
        desc: this.state.legendary_action_descs[i]
      };
      legendaryActionsArray.push(newLegendaryAction);
    }

    for (let i = 0; i < this.state.special_ability_names.length; i++) {
      const newSpecialAbility = {
        name: this.state.special_ability_names[i],
        desc: this.state.special_ability_descs[i]
      };
      specialAbilitiesArray.push(newSpecialAbility);
    }

    for (let i = 0; i < this.state.lair_action_descs.length; i++) {
      const newLairAction = {
        desc: this.state.lair_action_descs[i]
      };
      lairActionsArray.push(newLairAction);
    }

    for (let i = 0; i < this.state.regional_effect_descs.length; i++) {
      const newRegionalEffect = {
        desc: this.state.regional_effect_descs[i]
      };
      regionalEffectsArray.push(newRegionalEffect);
    }

    for (let i = 0; i < this.state.spell_names.length; i++) {
      const newSpell = {
        name: this.state.spell_names[i],
        level: this.state.spell_levels[i],
        school: this.state.spell_schools[i],
        casting_time: this.state.spell_casting_times[i],
        range: this.state.spell_ranges[i],
        components: this.state.spell_components[i],
        duration: this.state.spell_durations[i],
        desc: this.state.spell_descriptions[i]
      };
      spellsArray.push(newSpell);
    }

    const monData = {
      name: this.state.name,
      image: this.state.image,
      loot: this.state.loot,
      alignment: this.state.alignment,
      strength: this.state.strength,
      dexterity: this.state.dexterity,
      constitution: this.state.constitution,
      intelligence: this.state.intelligence,
      wisdom: this.state.wisdom,
      charisma: this.state.charisma,
      strength_save: this.state.strength_save,
      dexterity_save: this.state.dexterity_save,
      constitution_save: this.state.constitution_save,
      intelligence_save: this.state.intelligence_save,
      wisdom_save: this.state.wisdom_save,
      charisma_save: this.state.charisma_save,
      acrobatics: this.state.acrobatics,
      animal_handling: this.state.animal_handling,
      arcana: this.state.arcana,
      athletics: this.state.athletics,
      deception: this.state.deception,
      history: this.state.history,
      insight: this.state.insight,
      intimidation: this.state.intimidation,
      investigation: this.state.investigation,
      medicine: this.state.medicine,
      nature: this.state.nature,
      perception: this.state.perception,
      performance: this.state.performance,
      persuasion: this.state.persuasion,
      religion: this.state.religion,
      sleight_of_hand: this.state.sleight_of_hand,
      stealth: this.state.stealth,
      survival: this.state.survival,
      armor_class: this.state.armor_class,
      speed: this.state.speed,
      hit_points: this.state.hit_points,
      hit_dice: this.state.hit_dice,
      actions: actionsArray,
      legendary_actions: legendaryActionsArray,
      special_abilities: specialAbilitiesArray,
      lair_actions: lairActionsArray,
      regional_effects: regionalEffectsArray,
      spells: spellsArray,
      first_level_spell_slots: this.state.first_level_spell_slots,
      second_level_spell_slots: this.state.second_level_spell_slots,
      third_level_spell_slots: this.state.third_level_spell_slots,
      fourth_level_spell_slots: this.state.fourth_level_spell_slots,
      fifth_level_spell_slots: this.state.fifth_level_spell_slots,
      sixth_level_spell_slots: this.state.sixth_level_spell_slots,
      seventh_level_spell_slots: this.state.seventh_level_spell_slots,
      eighth_level_spell_slots: this.state.eighth_level_spell_slots,
      ninth_level_spell_slots: this.state.ninth_level_spell_slots,
      spellcasting_ability: this.state.spellcasting_ability,
      spell_save_dc: this.state.spell_save_dc,
      spell_attack_bonus: this.state.spell_attack_bonus,
      damage_vulnerabilities: this.state.damage_vulnerabilities,
      damage_resistances: this.state.damage_resistances,
      damage_immunities: this.state.damage_immunities,
      condition_immunities: this.state.condition_immunities,
      challenge_rating: this.state.challenge_rating,
      size: this.state.size,
      type: this.state.type,
      subtype: this.state.subtype,
      senses: this.state.senses,
      languages: this.state.languages,
      information: this.state.information,
      description: this.state.description
    };
    this.props.createMonster(monData, this.props.history);
  };

  addAction = () => {
    const oldActionNames = this.state.action_names;
    oldActionNames.push("");
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.push("");

    this.setState({
      action_names: oldActionNames,
      action_descs: oldActionDescriptions
    });
  };

  removeAction = index => {
    const oldActionNames = this.state.action_names;
    oldActionNames.splice(index, 1);
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.splice(index, 1);

    this.setState({
      action_names: oldActionNames,
      action_descs: oldActionDescriptions
    });
  };

  addLegendaryAction = () => {
    const oldLegendaryActionNames = this.state.legendary_action_names;
    oldLegendaryActionNames.push("");
    const oldLegendaryActionDescriptions = this.state.legendary_action_descs;
    oldLegendaryActionDescriptions.push("");

    this.setState({
      legendary_action_names: oldLegendaryActionNames,
      legendary_action_descs: oldLegendaryActionDescriptions
    });
  };

  removeLegendaryAction = index => {
    const oldLegendaryActionNames = this.state.legendary_action_names;
    oldLegendaryActionNames.splice(index, 1);
    const oldLegendaryActionDescriptions = this.state.legendary_action_descs;
    oldLegendaryActionDescriptions.splice(index, 1);

    this.setState({
      legendary_action_names: oldLegendaryActionNames,
      legendary_action_descs: oldLegendaryActionDescriptions
    });
  };

  addSpecialAbility = () => {
    const oldSpecialAbilityNames = this.state.special_ability_names;
    oldSpecialAbilityNames.push("");
    const oldSpecialAbilityDescriptions = this.state.special_ability_descs;
    oldSpecialAbilityDescriptions.push("");

    this.setState({
      special_ability_names: oldSpecialAbilityNames,
      special_ability_descs: oldSpecialAbilityDescriptions
    });
  };

  removeSpecialAbility = index => {
    const oldSpecialAbilityNames = this.state.special_ability_names;
    oldSpecialAbilityNames.splice(index, 1);
    const oldSpecialAbilityDescriptions = this.state.special_ability_descs;
    oldSpecialAbilityDescriptions.splice(index, 1);

    this.setState({
      special_ability_names: oldSpecialAbilityNames,
      special_ability_descs: oldSpecialAbilityDescriptions
    });
  };

  addLairAction = () => {
    const oldLairActionDescriptions = this.state.lair_action_descs;
    oldLairActionDescriptions.push("");

    this.setState({
      lair_action_descs: oldLairActionDescriptions
    });
  };

  removeLairAction = index => {
    const oldLairActionDescriptions = this.state.lair_action_descs;
    oldLairActionDescriptions.splice(index, 1);

    this.setState({
      lair_action_descs: oldLairActionDescriptions
    });
  };

  addRegionalEffect = () => {
    const oldRegionalEffectDescriptions = this.state.regional_effect_descs;
    oldRegionalEffectDescriptions.push("");
    this.setState({
      regional_effect_descs: oldRegionalEffectDescriptions
    });
  };

  removeRegionalEffect = index => {
    const oldRegionalEffectDescriptions = this.state.regional_effect_descs;
    oldRegionalEffectDescriptions.splice(index, 1);

    this.setState({
      regional_effect_descs: oldRegionalEffectDescriptions
    });
  };

  minimizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMinimized";
    this.setState({ spellsShow: oldState });
  };

  maximizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMaximized";
    this.setState({ spellsShow: oldState });
  };

  showAddSpell = () => {
    this.setState({ showAddSpell: "EditCharacterSpellMaximized" });
  };

  hideAddSpell = () => {
    this.setState({ showAddSpell: "Hidden" });
  };

  addSpell = () => {
    const oldSpellNames = this.state.spell_names;
    const oldSpellCastingTimes = this.state.spell_casting_times;
    const oldSpellDescriptions = this.state.spell_descriptions;
    const oldSpellDurations = this.state.spell_durations;
    const oldSpellRanges = this.state.spell_ranges;
    const oldSpellLevels = this.state.spell_levels;
    const oldSpellSchools = this.state.spell_schools;
    const oldSpellComponents = this.state.spell_components;

    let oldSpellsShow = this.state.spellsShow;
    oldSpellsShow.push("EditCharacterSpellMinimized");

    oldSpellNames.push(this.state.addSpellName);
    oldSpellCastingTimes.push(this.state.addSpellCastingTime);
    oldSpellDescriptions.push(this.state.addSpellDescription);
    oldSpellDurations.push(this.state.addSpellDuration);
    oldSpellRanges.push(this.state.addSpellRange);
    oldSpellLevels.push(this.state.addSpellLevel);
    oldSpellSchools.push(this.state.addSpellSchool);
    oldSpellComponents.push(this.state.addSpellComponents);

    this.setState({
      spell_names: oldSpellNames,
      spell_casting_times: oldSpellCastingTimes,
      spell_descriptions: oldSpellDescriptions,
      spell_durations: oldSpellDurations,
      spell_ranges: oldSpellRanges,
      spell_levels: oldSpellLevels,
      spell_schools: oldSpellSchools,
      spell_components: oldSpellComponents,
      addSpellName: "",
      addSpellCastingTime: "",
      addSpellDescription: "",
      addSpellDuration: "",
      addSpellRange: "",
      addSpellLevel: "",
      addSpellSchool: "",
      addSpellComponents: "",
      showAddSpell: "Hidden",
      spellsShow: oldSpellsShow
    });
  };

  removeSpell = index => {
    const oldSpellNames = this.state.spell_names;
    const oldSpellCastingTimes = this.state.spell_casting_times;
    const oldSpellDescriptions = this.state.spell_descriptions;
    const oldSpellDurations = this.state.spell_durations;
    const oldSpellRanges = this.state.spell_ranges;
    const oldSpellLevels = this.state.spell_levels;
    const oldSpellSchools = this.state.spell_schools;
    const oldSpellComponents = this.state.spell_components;
    oldSpellNames.splice(index, 1);
    oldSpellCastingTimes.splice(index, 1);
    oldSpellDescriptions.splice(index, 1);
    oldSpellDurations.splice(index, 1);
    oldSpellRanges.splice(index, 1);
    oldSpellLevels.splice(index, 1);
    oldSpellSchools.splice(index, 1);
    oldSpellComponents.splice(index, 1);

    let oldSpellsShow = this.state.spellsShow;
    oldSpellsShow.splice(index, 1);

    this.setState({
      spell_names: oldSpellNames,
      spell_casting_times: oldSpellCastingTimes,
      spell_descriptions: oldSpellDescriptions,
      spell_durations: oldSpellDurations,
      spell_ranges: oldSpellRanges,
      spell_levels: oldSpellLevels,
      spell_schools: oldSpellSchools,
      spell_components: oldSpellComponents,
      spellsShow: oldSpellsShow
    });
  };

  changeActionName = (index, e) => {
    let oldState = this.state.action_names;
    oldState[index] = e.target.value;
    this.setState({ action_names: oldState });
  };

  changeActionDescription = (index, e) => {
    let oldState = this.state.action_descs;
    oldState[index] = e.target.value;
    this.setState({ action_descs: oldState });
  };

  changeLegendaryActionName = (index, e) => {
    let oldState = this.state.legendary_action_names;
    oldState[index] = e.target.value;
    this.setState({ legendary_action_names: oldState });
  };

  changeLegendaryActionDescription = (index, e) => {
    let oldState = this.state.legendary_action_descs;
    oldState[index] = e.target.value;
    this.setState({ legendary_action_descs: oldState });
  };

  changeSpecialAbilityName = (index, e) => {
    let oldState = this.state.special_ability_names;
    oldState[index] = e.target.value;
    this.setState({ special_ability_names: oldState });
  };

  changeSpecialAbilityDescription = (index, e) => {
    let oldState = this.state.special_ability_descs;
    oldState[index] = e.target.value;
    this.setState({ special_ability_descs: oldState });
  };

  changeLairActionDescription = (index, e) => {
    let oldState = this.state.lair_action_descs;
    oldState[index] = e.target.value;
    this.setState({ lair_action_descs: oldState });
  };

  changeRegionalEffectDescription = (index, e) => {
    let oldState = this.state.regional_effect_descs;
    oldState[index] = e.target.value;
    this.setState({ regional_effect_descs: oldState });
  };

  changeSpellName = (index, e) => {
    let oldState = this.state.spell_names;
    oldState[index] = e.target.value;
    this.setState({ spell_names: oldState });
  };

  changeSpellCastingTime = (index, e) => {
    let oldState = this.state.spell_casting_times;
    oldState[index] = e.target.value;
    this.setState({ spell_casting_times: oldState });
  };

  changeSpellDescription = (index, e) => {
    let oldState = this.state.spell_descriptions;
    oldState[index] = e.target.value;
    this.setState({ spell_descriptions: oldState });
  };

  changeSpellDuration = (index, e) => {
    let oldState = this.state.spell_durations;
    oldState[index] = e.target.value;
    this.setState({ spell_durations: oldState });
  };

  changeSpellRange = (index, e) => {
    let oldState = this.state.spell_ranges;
    oldState[index] = e.target.value;
    this.setState({ spell_ranges: oldState });
  };

  changeSpellLevel = (index, e) => {
    let oldState = this.state.spell_levels;
    oldState[index] = e.target.value;
    this.setState({ spell_levels: oldState });
  };

  changeSpellSchool = (index, e) => {
    let oldState = this.state.spell_schools;
    oldState[index] = e.target.value;
    this.setState({ spell_schools: oldState });
  };

  changeSpellComponent = (index, e) => {
    let oldState = this.state.spell_components;
    oldState[index] = e.target.value;
    this.setState({ spell_components: oldState });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  viewAppearance = () => {
    this.setState({
      showCharacterAppearance: "ShowCharacterSection",
      showCharacterInformation: "HideCharacterSection",
      showCharacterLoot: "HideCharacterSection",
      characterAppearance: "CharacterClicked",
      characterInformation: "CharacterUnclicked",
      characterLoot: "CharacterUnclicked"
    });
  };

  viewInformation = () => {
    this.setState({
      showCharacterAppearance: "HideCharacterSection",
      showCharacterInformation: "ShowCharacterSection",
      showCharacterLoot: "HideCharacterSection",
      characterAppearance: "CharacterUnclicked",
      characterInformation: "CharacterClicked",
      characterLoot: "CharacterUnclicked"
    });
  };

  viewLoot = () => {
    this.setState({
      showCharacterAppearance: "HideCharacterSection",
      showCharacterInformation: "HideCharacterSection",
      showCharacterLoot: "ShowCharacterSection",
      characterAppearance: "CharacterUnclicked",
      characterInformation: "CharacterUnclicked",
      characterLoot: "CharacterClicked"
    });
  };

  viewActions = () => {
    this.setState({
      showCharacterActions: "ShowCombatHolder",
      showCharacterSpells: "HideCharacterSection",
      showCharacterLegendaryActions: "HideCharacterSection",
      characterActions: "CharacterClicked",
      characterSpells: "CharacterUnclicked",
      characterLegendaryActions: "CharacterUnclicked"
    });
  };

  viewSpells = () => {
    this.setState({
      showCharacterActions: "HideCharacterSection",
      showCharacterSpells: "ShowCombatHolder",
      showCharacterLegendaryActions: "HideCharacterSection",
      characterActions: "CharacterUnclicked",
      characterSpells: "CharacterClicked",
      characterLegendaryActions: "CharacterUnclicked"
    });
  };

  viewLegendaryActions = () => {
    this.setState({
      showCharacterActions: "HideCharacterSection",
      showCharacterSpells: "HideCharacterSection",
      showCharacterLegendaryActions: "ShowCombatHolder",
      characterActions: "CharacterUnclicked",
      characterSpells: "CharacterUnclicked",
      characterLegendaryActions: "CharacterClicked"
    });
  };

  viewSpecialAbilities = () => {
    this.setState({
      showCharacterSpecialAbilities: "ShowCombatHolder",
      showCharacterRegionalEffects: "HideCharacterSection",
      showCharacterLairActions: "HideCharacterSection",
      characterSpecialAbilities: "CharacterClicked",
      characterRegionalEffects: "CharacterUnclicked",
      characterLairActions: "CharacterUnclicked"
    });
  };

  viewRegionalEffects = () => {
    this.setState({
      showCharacterSpecialAbilities: "HideCharacterSection",
      showCharacterRegionalEffects: "ShowCombatHolder",
      showCharacterLairActions: "HideCharacterSection",
      characterSpecialAbilities: "CharacterUnclicked",
      characterRegionalEffects: "CharacterClicked",
      characterLairActions: "CharacterUnclicked"
    });
  };

  viewLairActions = () => {
    this.setState({
      showCharacterSpecialAbilities: "HideCharacterSection",
      showCharacterRegionalEffects: "HideCharacterSection",
      showCharacterLairActions: "ShowCombatHolder",
      characterSpecialAbilities: "CharacterUnclicked",
      characterRegionalEffects: "CharacterUnclicked",
      characterLairActions: "CharacterClicked"
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
              wantedWidth = 100;
              wantedHeight = wantedWidth / ratio;
            } else {
              let ratio = img.height / img.width;
              wantedHeight = 145;
              wantedWidth = wantedHeight / ratio;
              while (wantedWidth > 100) {
                wantedHeight -= 1;
                wantedWidth = wantedHeight / ratio;
              }
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

  render() {
    const { errors, image } = this.state;
    const { profile, loading } = this.props.profile;
    if (profile === null || loading) {
      return <Spinner />;
    } else {
      let imagePreview = null;
      if (image) {
        imagePreview = (
          <img className="EditCharacterImageDisplay" src={image} alt="" />
        );
      }
      const actionList = [];
      for (let i = 0; i < this.state.action_names.length; i++) {
        let action = (
          <div key={`Action${i}`} className="EditCharacterAction">
            <div
              className="EditCharacterActionRemove"
              onClick={this.removeAction.bind(this, i)}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="EditCharacterFeatureNameHolder">
              <input
                maxLength="100"
                className="EditCharacterActionName"
                value={this.state.action_names[i]}
                onChange={this.changeActionName.bind(this, i)}
              />
            </div>
            <div className="EditCharacterFeatureDescriptionHolder">
              <textarea
                maxLength="5000"
                className="EditCharacterActionDescription"
                value={this.state.action_descs[i]}
                onChange={this.changeActionDescription.bind(this, i)}
              />
            </div>
          </div>
        );
        actionList.push(action);
      }

      const legendaryActionList = [];
      for (let i = 0; i < this.state.legendary_action_names.length; i++) {
        let legendaryAction = (
          <div key={`LegendaryAction${i}`} className="EditCharacterAction">
            <div
              className="EditCharacterActionRemove"
              onClick={this.removeLegendaryAction.bind(this, i)}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="EditCharacterFeatureNameHolder">
              <input
                maxLength="100"
                className="EditCharacterActionName"
                value={this.state.legendary_action_names[i]}
                onChange={this.changeLegendaryActionName.bind(this, i)}
              />
            </div>
            <div className="EditCharacterFeatureDescriptionHolder">
              <textarea
                maxLength="5000"
                className="EditCharacterActionDescription"
                value={this.state.legendary_action_descs[i]}
                onChange={this.changeLegendaryActionDescription.bind(this, i)}
              />
            </div>
          </div>
        );
        legendaryActionList.push(legendaryAction);
      }

      const specialAbilityList = [];
      for (let i = 0; i < this.state.special_ability_names.length; i++) {
        let specialAbility = (
          <div key={`SpecialAbility${i}`} className="EditCharacterAction">
            <div
              className="EditCharacterActionRemove"
              onClick={this.removeSpecialAbility.bind(this, i)}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="EditCharacterFeatureNameHolder">
              <input
                maxLength="100"
                className="EditCharacterActionName"
                value={this.state.special_ability_names[i]}
                onChange={this.changeSpecialAbilityName.bind(this, i)}
              />
            </div>
            <div className="EditCharacterFeatureDescriptionHolder">
              <textarea
                maxLength="5000"
                className="EditCharacterActionDescription"
                value={this.state.special_ability_descs[i]}
                onChange={this.changeSpecialAbilityDescription.bind(this, i)}
              />
            </div>
          </div>
        );
        specialAbilityList.push(specialAbility);
      }

      const lairActionList = [];
      for (let i = 0; i < this.state.lair_action_descs.length; i++) {
        let lairAction = (
          <div key={`LairAction${i}`} className="EditCharacterAction">
            <div
              className="EditCharacterActionRemove"
              onClick={this.removeLairAction.bind(this, i)}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="ImageFill BlackBorder">
              <textarea
                maxLength="5000"
                className="EditMonsterDescription"
                value={this.state.lair_action_descs[i]}
                onChange={this.changeLairActionDescription.bind(this, i)}
              />
            </div>
          </div>
        );
        lairActionList.push(lairAction);
      }

      const regionalEffectList = [];
      for (let i = 0; i < this.state.regional_effect_descs.length; i++) {
        let regionalEffect = (
          <div key={`RegionalEffect${i}`} className="EditCharacterAction">
            <div
              className="EditCharacterActionRemove"
              onClick={this.removeRegionalEffect.bind(this, i)}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="ImageFill BlackBorder">
              <textarea
                maxLength="5000"
                className="EditMonsterDescription"
                value={this.state.regional_effect_descs[i]}
                onChange={this.changeRegionalEffectDescription.bind(this, i)}
              />
            </div>
          </div>
        );
        regionalEffectList.push(regionalEffect);
      }

      const cantripList = [];
      const firstLevelSpellList = [];
      const secondLevelSpellList = [];
      const thirdLevelSpellList = [];
      const fourthLevelSpellList = [];
      const fifthLevelSpellList = [];
      const sixthLevelSpellList = [];
      const seventhLevelSpellList = [];
      const eighthLevelSpellList = [];
      const ninthLevelSpellList = [];
      let spell = null;
      for (let i = 0; i < this.state.spell_names.length; i++) {
        if (this.state.spellsShow[i] === "EditCharacterSpellMinimized") {
          spell = (
            <div key={`Spell${i}`} className="EditCharacterSpellMinimized">
              <div className="EditCharacterSpellMaximizeRemoveHolder">
                <div
                  className="EditCharacterSpellMaximize"
                  onClick={this.maximizeSpell.bind(this, i)}
                >
                  <div className="CenteredPlus">
                    <i className="fa fa-window-maximize" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="EditCharacterSpellRemove"
                  onClick={this.removeSpell.bind(this, i)}
                >
                  <div className="CenteredPlus">X</div>
                </div>
              </div>
              <div className="EditCharacterSpellNameMinimized">
                {this.state.spell_names[i]}
              </div>
            </div>
          );
        } else {
          spell = <div key={`Spell${i}`} className="Hidden" />;
        }
        if (this.state.spell_levels[i] === "Cantrip") {
          cantripList.push(spell);
        } else if (this.state.spell_levels[i] === "1st") {
          firstLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "2nd") {
          secondLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "3rd") {
          thirdLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "4th") {
          fourthLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "5th") {
          fifthLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "6th") {
          sixthLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "7th") {
          seventhLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "8th") {
          eighthLevelSpellList.push(spell);
        } else if (this.state.spell_levels[i] === "9th") {
          ninthLevelSpellList.push(spell);
        }
      }

      let maximizeSpell;
      for (let i = 0; i < this.state.spell_names.length; i++) {
        if (this.state.spellsShow[i] !== "EditCharacterSpellMinimized") {
          maximizeSpell = (
            <div
              key={`Spell${i}`}
              className="DarkOverlay EditCharacterSpellMaximized"
            >
              <div className="EditCharacterAddSpellNameText">Name</div>
              <div className="EditCharacterAddSpellLevelText">Level</div>
              <div className="EditCharacterAddSpellSchoolText">School</div>
              <div className="EditCharacterAddSpellCastingTimeText">
                Casting Time
              </div>
              <div className="EditCharacterAddSpellRangeText">Range</div>
              <div className="EditCharacterAddSpellComponentsText">
                Components
              </div>
              <div className="EditCharacterAddSpellDurationText">Duration</div>
              <div
                className="EditCharacterAddSpellMinimize"
                onClick={this.minimizeSpell.bind(this, i)}
              >
                <i className="fas fa-window-minimize" />
              </div>
              <div
                className="EditCharacterRemoveSpellButton"
                onClick={this.removeSpell.bind(this, i)}
              >
                <div className="CenteredPlusNoColor">X</div>
              </div>
              <input
                maxLength="100"
                className="EditCharacterAddSpellName"
                value={this.state.spell_names[i]}
                onChange={this.changeSpellName.bind(this, i)}
              />
              <select
                className="EditCharacterAddSpellLevel"
                value={this.state.spell_levels[i]}
                onChange={this.changeSpellLevel.bind(this, i)}
              >
                <option value="Cantrip">Cantrip</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
              </select>
              <input
                maxLength="100"
                className="EditCharacterAddSpellSchool"
                value={this.state.spell_schools[i]}
                onChange={this.changeSpellSchool.bind(this, i)}
              />
              <input
                maxLength="100"
                className="EditCharacterAddSpellCastingTime"
                value={this.state.spell_casting_times[i]}
                onChange={this.changeSpellCastingTime.bind(this, i)}
              />
              <input
                maxLength="100"
                className="EditCharacterAddSpellRange"
                value={this.state.spell_ranges[i]}
                onChange={this.changeSpellRange.bind(this, i)}
              />
              <input
                maxLength="100"
                className="EditCharacterAddSpellComponents"
                value={this.state.spell_components[i]}
                onChange={this.changeSpellComponent.bind(this, i)}
              />
              <input
                maxLength="100"
                className="EditCharacterAddSpellDuration"
                value={this.state.spell_durations[i]}
                onChange={this.changeSpellDuration.bind(this, i)}
              />

              <textarea
                maxLength="5000"
                className="EditCharacterAddSpellDescription"
                value={this.state.spell_descriptions[i]}
                onChange={this.changeSpellDescription.bind(this, i)}
              />
            </div>
          );
        }
      }
      let addSpell = (
        <div className={`DarkOverlay ${this.state.showAddSpell}`}>
          <div
            className="EditCharacterAddSpellMinimize"
            onClick={this.hideAddSpell}
          >
            <i className="fas fa-window-minimize" />
          </div>
          <div className="EditCharacterAddSpellButton" onClick={this.addSpell}>
            <div className="CenteredPlusNoColor">+</div>
          </div>
          <div className="EditCharacterAddSpellNameText">Name</div>
          <div className="EditCharacterAddSpellLevelText">Level</div>
          <div className="EditCharacterAddSpellSchoolText">School</div>
          <div className="EditCharacterAddSpellCastingTimeText">
            Casting Time
          </div>
          <div className="EditCharacterAddSpellRangeText">Range</div>
          <div className="EditCharacterAddSpellComponentsText">Components</div>
          <div className="EditCharacterAddSpellDurationText">Duration</div>

          <input
            maxLength="100"
            className="EditCharacterAddSpellName"
            name="addSpellName"
            value={this.state.addSpellName}
            onChange={this.onChange}
          />
          <select
            className="EditCharacterAddSpellLevel"
            name="addSpellLevel"
            value={this.state.addSpellLevel}
            onChange={this.onChange}
          >
            <option className="TextCentered" value="Choose Level">
              Choose Level
            </option>
            <option className="TextCentered" value="Cantrip">
              Cantrip
            </option>
            <option className="TextCentered" value="1st">
              1st
            </option>
            <option className="TextCentered" value="2nd">
              2nd
            </option>
            <option className="TextCentered" value="3rd">
              3rd
            </option>
            <option className="TextCentered" value="4th">
              4th
            </option>
            <option className="TextCentered" value="5th">
              5th
            </option>
            <option className="TextCentered" value="6th">
              6th
            </option>
            <option className="TextCentered" value="7th">
              7th
            </option>
            <option className="TextCentered" value="8th">
              8th
            </option>
            <option className="TextCentered" value="9th">
              9th
            </option>
          </select>
          <input
            maxLength="100"
            className="EditCharacterAddSpellSchool"
            name="addSpellSchool"
            value={this.state.addSpellSchool}
            onChange={this.onChange}
          />

          <input
            maxLength="100"
            className="EditCharacterAddSpellCastingTime"
            name="addSpellCastingTime"
            value={this.state.addSpellCastingTime}
            onChange={this.onChange}
          />
          <input
            maxLength="100"
            className="EditCharacterAddSpellRange"
            name="addSpellRange"
            value={this.state.addSpellRange}
            onChange={this.onChange}
          />
          <input
            maxLength="100"
            className="EditCharacterAddSpellComponents"
            name="addSpellComponents"
            value={this.state.addSpellComponents}
            onChange={this.onChange}
          />
          <input
            maxLength="100"
            className="EditCharacterAddSpellDuration"
            name="addSpellDuration"
            value={this.state.addSpellDuration}
            onChange={this.onChange}
          />
          <textarea
            maxLength="5000"
            className="EditCharacterAddSpellDescription"
            name="addSpellDescription"
            value={this.state.addSpellDescription}
            onChange={this.onChange}
          />
         
        </div>
      );

      let strengthModifier = Math.floor((this.state.strength - 10) / 2);
      let dexterityModifier = Math.floor((this.state.dexterity - 10) / 2);
      let constitutionModifier = Math.floor((this.state.constitution - 10) / 2);
      let intelligenceModifier = Math.floor((this.state.intelligence - 10) / 2);
      let wisdomModifier = Math.floor((this.state.wisdom - 10) / 2);
      let charismaModifier = Math.floor((this.state.charisma - 10) / 2);

      let addActionButton;
      let addSpellButton;
      let addLairActionButton;
      let addLegendaryActionButton;
      let addRegionalEffectButton;
      let addSpecialAbilityButton;
      if (actionList.length >= 50) {
        addActionButton = <div className="Hidden" />;
      } else {
        addActionButton = (
          <div className="EditCharacterAddAction" onClick={this.addAction}>
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
      }
      if (lairActionList.length >= 50) {
        addLairActionButton = <div className="Hidden" />;
      } else {
        addLairActionButton = (
          <div className="EditCharacterAddAction" onClick={this.addLairAction}>
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
      }
      if (legendaryActionList.length >= 50) {
        addLegendaryActionButton = <div className="Hidden" />;
      } else {
        addLegendaryActionButton = (
          <div
            className="EditCharacterAddAction"
            onClick={this.addLegendaryAction}
          >
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
      }
      if (regionalEffectList.length >= 50) {
        addRegionalEffectButton = <div className="Hidden" />;
      } else {
        addRegionalEffectButton = (
          <div
            className="EditCharacterAddAction"
            onClick={this.addRegionalEffect}
          >
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
      }
      if (specialAbilityList.length >= 50) {
        addSpecialAbilityButton = <div className="Hidden" />;
      } else {
        addSpecialAbilityButton = (
          <div
            className="EditCharacterAddAction"
            onClick={this.addSpecialAbility}
          >
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
      }
      if (
        firstLevelSpellList.length +
          secondLevelSpellList.length +
          thirdLevelSpellList.length +
          fourthLevelSpellList.length +
          fifthLevelSpellList.length +
          sixthLevelSpellList.length +
          seventhLevelSpellList.length +
          eighthLevelSpellList.length +
          ninthLevelSpellList.length >=
        450
      ) {
        addSpellButton = (
          <div className="EditCharacterAddSpell">
            <div className="CenteredPlusNoColor">Max # of Spells Reached</div>
          </div>
        );
      } else {
        addSpellButton = (
          <div className="EditCharacterAddSpell" onClick={this.showAddSpell}>
            <div className="CenteredPlusNoColor">+</div>
          </div>
        );
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
              window.location = "/monsters"
            }
          }}
        >
          <div className="CenteredPlusNoColor">
              <i className="fas fa-arrow-left" />
              Go Back
            </div>
        </div>
          <div className="BookHolder">
            <img src={Book} alt="" className="ImageFill" />
          </div>
          <div className="EditCharacterName">
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
            {errors.name && <div className="FormError">{errors.name}</div>}
          </div>

          <div className="EditCharacterClassAndLevel">
            <div className="EditCharacterText">Type</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterBackground">
            <div className="EditCharacterText">Subtype</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="subtype"
              value={this.state.subtype}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterChallengeRating">
            <div className="EditChallengeRatingText">Challenge Rating</div>
            <input
              maxLength="100"
              className="EditChallengeRatingInput"
              name="challenge_rating"
              value={this.state.challenge_rating}
              type="number"
              onChange={this.onChange}
              error={errors.challenge_rating}
            />
          </div>

          <div className="EditCharacterRace">
            <div className="EditCharacterText">Size</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="size"
              value={this.state.size}
              onChange={this.onChange}
              error={errors.size}
            />
          </div>

          <div className="EditCharacterAlignment">
            <div className="EditCharacterText">Alignment</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="alignment"
              value={this.state.alignment}
              onChange={this.onChange}
              error={errors.alignment}
            />
          </div>

          <div className="EditCharacterHitPoints">
            <div className="EditCharacterSquareText">Hit Points</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="hit_points"
              value={this.state.hit_points}
              type="number"
              onChange={this.onChange}
              error={errors.hit_points}
            />
          </div>
          <div className="EditCharacterHitDice">
            <div className="EditCharacterSquareText">Hit Dice</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="hit_dice"
              value={this.state.hit_dice}
              type="text"
              onChange={this.onChange}
              error={errors.hit_dice}
            />
          </div>
          <div className="EditCharacterArmorClass">
            <div className="EditCharacterSquareText">Armor Class</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="armor_class"
              value={this.state.armor_class}
              type="number"
              onChange={this.onChange}
              error={errors.armor_class}
            />
          </div>
          <div className="EditCharacterSpeed">
            <div className="EditCharacterSquareText">Speed</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="speed"
              value={this.state.speed}
              type="number"
              onChange={this.onChange}
              error={errors.speed}
            />
          </div>

          <div className="EditCharacterStrengthSave">
            <div className="EditCharacterSquareText">Strength Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="strength_save"
              value={this.state.strength_save}
              type="number"
              onChange={this.onChange}
              error={errors.strength_save}
            />
          </div>
          <div className="EditCharacterDexteritySave">
            <div className="EditCharacterSquareText">Dexterity Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="dexterity_save"
              value={this.state.dexterity_save}
              type="number"
              onChange={this.onChange}
              error={errors.dexterity_save}
            />
          </div>
          <div className="EditCharacterConstitutionSave">
            <div className="EditCharacterSquareText">Constitution Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="constitution_save"
              value={this.state.constitution_save}
              type="number"
              onChange={this.onChange}
              error={errors.constitution_save}
            />
          </div>
          <div className="EditCharacterIntelligenceSave">
            <div className="EditCharacterSquareText">Intelligence Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="intelligence_save"
              value={this.state.intelligence_save}
              type="number"
              onChange={this.onChange}
              error={errors.intelligence_save}
            />
          </div>
          <div className="EditCharacterWisdomSave">
            <div className="EditCharacterSquareText">Wisdom Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="wisdom_save"
              value={this.state.wisdom_save}
              type="number"
              onChange={this.onChange}
              error={errors.wisdom_save}
            />
          </div>
          <div className="EditCharacterCharismaSave">
            <div className="EditCharacterSquareText">Charisma Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="charisma_save"
              value={this.state.charisma_save}
              type="number"
              onChange={this.onChange}
              error={errors.charisma_save}
            />
          </div>

          <div className="EditCharacterStrengthDisplay">
            STR
            <div className="EncounterCharacterEnlargedInput">
              {strengthModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="strength"
                value={this.state.strength}
                type="number"
                onChange={this.onChange}
                error={errors.strength}
              />
            </div>
          </div>

          <div className="EditCharacterDexterityDisplay">
            DEX
            <div className="EncounterCharacterEnlargedInput">
              {dexterityModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="dexterity"
                value={this.state.dexterity}
                type="number"
                onChange={this.onChange}
                error={errors.dexterity}
              />
            </div>
          </div>
          <div className="EditCharacterConstitutionDisplay">
            CON
            <div className="EncounterCharacterEnlargedInput">
              {constitutionModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="constitution"
                value={this.state.constitution}
                type="number"
                onChange={this.onChange}
                error={errors.constitution}
              />
            </div>
          </div>
          <div className="EditCharacterIntelligenceDisplay">
            INT
            <div className="EncounterCharacterEnlargedInput">
              {intelligenceModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="intelligence"
                value={this.state.intelligence}
                type="number"
                onChange={this.onChange}
                error={errors.intelligence}
              />
            </div>
          </div>
          <div className="EditCharacterWisdomDisplay">
            WIS
            <div className="EncounterCharacterEnlargedInput">
              {wisdomModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="wisdom"
                value={this.state.wisdom}
                type="number"
                onChange={this.onChange}
                error={errors.wisdom}
              />
            </div>
          </div>
          <div className="EditCharacterCharismaDisplay">
            CHA
            <div className="EncounterCharacterEnlargedInput">
              {charismaModifier}
            </div>
            <div className="EncounterCharacterEnlargedModifier">
              <input
                maxLength="100"
                className="ModifierText"
                name="charisma"
                value={this.state.charisma}
                type="number"
                onChange={this.onChange}
                error={errors.charisma}
              />
            </div>
          </div>

          <div className="EditCharacterOtherProficienciesAndLanguages">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Senses
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="senses"
              value={this.state.senses}
              onChange={this.onChange}
            />
          </div>

          <div className="EditMonsterLanguages">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Languages
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="languages"
              value={this.state.languages}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterDamageVulnerabilities">
            <div className="EditCharacterText">Damage Vulnerabilities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_vulnerabilities"
              value={this.state.damage_vulnerabilities}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterDamageResistances">
            <div className="EditCharacterText">Damage Resistances</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_resistances"
              value={this.state.damage_resistances}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterDamageImmunities">
            <div className="EditCharacterText">Damage Immunities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_immunities"
              value={this.state.damage_immunities}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterConditionImmunities">
            <div className="EditCharacterText">Condition Immunities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="condition_immunities"
              value={this.state.condition_immunities}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterMiscHolder ">
            <div
              className={`EditCharacterAppearance ${
                this.state.characterAppearance
              }`}
              onClick={this.viewAppearance}
            >
              <div className="BuildingOwnersText">Appearance</div>
            </div>
            <div className={this.state.showCharacterAppearance}>
              <input
                className="EditCharacterImage"
                name="image"
                type="file"
                onChange={e => this.handleImageChange(e)}
              />
              <div className="EditCharacterImageHolder">{imagePreview}</div>

              <div className="EditMonsterImageDescription">
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
            </div>
            <div
              className={`EditCharacterQualities ${
                this.state.characterInformation
              }`}
              onClick={this.viewInformation}
            >
              <div className="BuildingOwnersText">Information</div>
            </div>
            <div className={this.state.showCharacterInformation}>
              <div className="EditCharacterBackstoryText">
                <div className="EditCharacterOtherProficienciesAndLanguagesText">
                  Information
                </div>
                <textarea
                  maxLength="5000"
                  className="EditCharacterOtherProficienciesAndLanguagesInput"
                  name="information"
                  value={this.state.information}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div
              className={`EditCharacterBackstory ${this.state.characterLoot}`}
              onClick={this.viewLoot}
            >
              <div className="BuildingOwnersText">Loot</div>
            </div>
            <div className={this.state.showCharacterLoot}>
              <div className="EditCharacterBackstoryText">
                <div className="EditCharacterOtherProficienciesAndLanguagesText">
                  Loot
                </div>
                <textarea
                  maxLength="5000"
                  className="EditCharacterOtherProficienciesAndLanguagesInput"
                  name="loot"
                  value={this.state.loot}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="EditCharacterCombatHolder">
            <div
              className={`EditCharacterActions ${this.state.characterActions}`}
              onClick={this.viewActions}
            >
              <div className="BuildingOwnersText">Actions</div>
            </div>
            <div className={this.state.showCharacterActions}>
              <div className="EditCharacterFeatureNameLabel">Name</div>
              <div className="EditCharacterFeatureDescriptionLabel">
                Description
              </div>
              <div className="EditCharacterActionMakeSpace" />

              {actionList}
              {addActionButton}
            </div>
            <div
              className={`EditCharacterSpells ${this.state.characterSpells}`}
              onClick={this.viewSpells}
            >
              <div className="BuildingOwnersText">Spells</div>
            </div>
            <div className={this.state.showCharacterSpells}>
              <div className="EditCharacterSpellcastingAbility">
                <div className="EditCharacterSpellcastingText">
                  Spellcasting Ability
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellcastingInput"
                  name="spellcasting_ability"
                  value={this.state.spellcasting_ability}
                  onChange={this.onChange}
                />
              </div>
              <div className="EditCharacterSpellSaveDC">
                <div className="EditCharacterSpellcastingText">
                  Spell Save DC
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellcastingInput"
                  type="number"
                  name="spell_save_dc"
                  value={this.state.spell_save_dc}
                  onChange={this.onChange}
                />
              </div>
              <div className="EditCharacterSpellAttackBonus">
                <div className="EditCharacterSpellcastingText">
                  Spell Attack Bonus
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellcastingInput"
                  type="number"
                  name="spell_attack_bonus"
                  value={this.state.spell_attack_bonus}
                  onChange={this.onChange}
                />
              </div>

              {addSpellButton}
              <div className="EditCharacterCantrips">
                <div className="EditCharacterSpellLevelDisplayText">
                  Cantrips
                </div>
                {cantripList}
              </div>
              <div className="EditCharacterFirstLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">1st</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="first_level_spell_slots"
                  value={this.state.first_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {firstLevelSpellList}
              </div>
              <div className="EditCharacterSecondLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">2nd</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="second_level_spell_slots"
                  value={this.state.second_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {secondLevelSpellList}
              </div>
              <div className="EditCharacterThirdLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">3rd</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="third_level_spell_slots"
                  value={this.state.third_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {thirdLevelSpellList}
              </div>
              <div className="EditCharacterFourthLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">4th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="fourth_level_spell_slots"
                  value={this.state.fourth_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {fourthLevelSpellList}
              </div>
              <div className="EditCharacterFifthLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">5th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="fifth_level_spell_slots"
                  value={this.state.fifth_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {fifthLevelSpellList}
              </div>
              <div className="EditCharacterSixthLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">6th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="sixth_level_spell_slots"
                  value={this.state.sixth_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {sixthLevelSpellList}
              </div>
              <div className="EditCharacterSeventhLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">7th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="seventh_level_spell_slots"
                  value={this.state.seventh_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {seventhLevelSpellList}
              </div>
              <div className="EditCharacterEighthLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">8th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="eighth_level_spell_slots"
                  value={this.state.eighth_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {eighthLevelSpellList}
              </div>
              <div className="EditCharacterNinthLevelSpells">
                <div className="EditCharacterSpellLevelDisplayText">9th</div>
                <input
                  maxLength="100"
                  className="EditCharacterSpellSlot"
                  placeholder="Slots"
                  name="ninth_level_spell_slots"
                  value={this.state.ninth_level_spell_slots}
                  type="number"
                  onChange={this.onChange}
                />
                {ninthLevelSpellList}
              </div>
              {maximizeSpell}
              {addSpell}
            </div>

            <div
              className={`EditCharacterFeatures ${
                this.state.characterLegendaryActions
              }`}
              onClick={this.viewLegendaryActions}
            >
              <div className="BuildingOwnersText">Legendary Actions</div>
            </div>
            <div className={this.state.showCharacterLegendaryActions}>
              <div className="EditCharacterFeatureNameLabel">Name</div>
              <div className="EditCharacterFeatureDescriptionLabel">
                Description
              </div>
              <div className="EditCharacterActionMakeSpace" />

              {legendaryActionList}
              {addLegendaryActionButton}
            </div>
          </div>
          <div className="EditMonsterSkills">
            <div className="EditCharacterSkillHeaderText">Skills</div>
            <div className="EditCharacterSkillList">
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Acrobatics <small>(DEX)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="acrobatics"
                  value={this.state.acrobatics}
                  type="number"
                  onChange={this.onChange}
                  error={errors.acrobatics}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Animal Handling <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="animal_handling"
                  value={this.state.animal_handling}
                  type="number"
                  onChange={this.onChange}
                  error={errors.animal_handling}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Arcana <small>(INT)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="arcana"
                  value={this.state.arcana}
                  type="number"
                  onChange={this.onChange}
                  error={errors.arcana}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Athletics <small>(STR)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="athletics"
                  value={this.state.athletics}
                  type="number"
                  onChange={this.onChange}
                  error={errors.athletics}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Deception <small>(CHA)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="deception"
                  value={this.state.deception}
                  type="number"
                  onChange={this.onChange}
                  error={errors.deception}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  History <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="history"
                  value={this.state.history}
                  type="number"
                  onChange={this.onChange}
                  error={errors.history}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Insight <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="insight"
                  value={this.state.insight}
                  type="number"
                  onChange={this.onChange}
                  error={errors.insight}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Intimidation <small>(CHA)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="intimidation"
                  value={this.state.intimidation}
                  type="number"
                  onChange={this.onChange}
                  error={errors.intimidation}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Investigation <small>(INT)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="investigation"
                  value={this.state.investigation}
                  type="number"
                  onChange={this.onChange}
                  error={errors.investigation}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Medicine <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="medicine"
                  value={this.state.medicine}
                  type="number"
                  onChange={this.onChange}
                  error={errors.medicine}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Nature <small>(INT)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="nature"
                  value={this.state.nature}
                  type="number"
                  onChange={this.onChange}
                  error={errors.nature}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Perception <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="perception"
                  value={this.state.perception}
                  type="number"
                  onChange={this.onChange}
                  error={errors.perception}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Performance <small>(CHA)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="performance"
                  value={this.state.performance}
                  type="number"
                  onChange={this.onChange}
                  error={errors.performance}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Persuasion <small>(CHA)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="persuasion"
                  value={this.state.persuasion}
                  type="number"
                  onChange={this.onChange}
                  error={errors.persuasion}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Religion <small>(INT)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="religion"
                  value={this.state.religion}
                  type="number"
                  onChange={this.onChange}
                  error={errors.religion}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Sleight of Hand <small>(DEX)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="sleight_of_hand"
                  value={this.state.sleight_of_hand}
                  type="number"
                  onChange={this.onChange}
                  error={errors.sleight_of_hand}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Stealth <small>(DEX)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="stealth"
                  value={this.state.stealth}
                  type="number"
                  onChange={this.onChange}
                  error={errors.stealth}
                />
              </div>
              <div className="EditCharacterSkillHolder">
                <div className="EditCharacterSkillText">
                  Survival <small>(WIS)</small>
                </div>
                <input
                  maxLength="100"
                  className="EditCharacterSkill"
                  name="survival"
                  value={this.state.survival}
                  type="number"
                  onChange={this.onChange}
                  error={errors.survival}
                />
              </div>
            </div>
          </div>

          <div className="EditCharacterSpecialAbilitiesHolder ">
            <div
              className={`EditCharacterActions ${
                this.state.characterSpecialAbilities
              }`}
              onClick={this.viewSpecialAbilities}
            >
              <div className="BuildingOwnersText">Special Abilities</div>
            </div>
            <div className={this.state.showCharacterSpecialAbilities}>
              <div className="EditCharacterFeatureNameLabel">Name</div>
              <div className="EditCharacterFeatureDescriptionLabel">
                Description
              </div>
              <div className="EditCharacterActionMakeSpace" />

              {specialAbilityList}
              {addSpecialAbilityButton}
            </div>
            <div
              className={`EditCharacterSpells ${
                this.state.characterRegionalEffects
              }`}
              onClick={this.viewRegionalEffects}
            >
              <div className="BuildingOwnersText">Regional Effects</div>
            </div>
            <div className={this.state.showCharacterRegionalEffects}>
              <div className="EditMonsterDescriptionLabel">Description</div>
              <div className="EditCharacterActionMakeSpace" />

              {regionalEffectList}
              {addRegionalEffectButton}
            </div>
            <div
              className={`EditCharacterFeatures ${
                this.state.characterLairActions
              }`}
              onClick={this.viewLairActions}
            >
              <div className="BuildingOwnersText">Lair Actions</div>
            </div>
            <div className={this.state.showCharacterLairActions}>
              <div className="EditMonsterDescriptionLabel">Description</div>
              <div className="EditCharacterActionMakeSpace" />

              {lairActionList}
              {addLairActionButton}
            </div>
          </div>

          <div
            onClick={this.onSubmit}
            className="BookSubmitButton MonsterColor"
          >
            <div className="ButtonColorHelper">
              <div className="CenteredPlusNoColor">Create Monster</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

CreateMonster.propTypes = {
  createMonster: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createMonster, getCurrentProfile }
)(withRouter(CreateMonster));
