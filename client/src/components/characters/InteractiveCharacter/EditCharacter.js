import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editCharacter } from "../../../actions/profileActions";
import Book from "../../../images/book_dmkit_cropped.png";
import classnames from "classnames";

class EditCharacter extends Component {
  state = {
    characterId: window.location.pathname.substr(12, 200),
    name: "",
    image: "",
    player_name: "",
    class_and_level: "",
    race: "",
    background: "",
    factions: "",
    alignment: "",
    experience_points: "",
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
    hit_points: "",
    temporary_hit_points: "",
    hit_dice: "",
    death_successes: "",
    death_failures: "",
    characterActions: "CharacterClicked",
    characterSpells: "CharacterUnclicked",
    characterFeatures: "CharacterUnclicked",
    characterAppearance: "CharacterClicked",
    characterQualities: "CharacterUnclicked",
    characterBackstory: "CharacterUnclicked",
    spellcasting_ability: "",
    spell_save_dc: "",
    spell_attack_bonus: "",
    action_names: [""],
    action_descs: [""],
    action_attack_bonuses: [""],
    action_damage_bonuses: [""],
    action_damage_dices: [""],
    spells: [],
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
    spell_names: [],
    spell_levels: [],
    spell_schools: [],
    spell_casting_times: [],
    spell_ranges: [],
    spell_components: [],
    spell_durations: [],
    spell_descriptions: [],
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

    features_and_traits: "",
    features_and_traits_names: [""],
    features_and_traits_descriptions: [""],
    personality_traits: "",
    ideals: "",
    bonds: "",
    flaws: "",
    damage_immunities: "",
    damage_resistances: "",
    damage_vulnerabilities: "",
    condition_immunities: "",
    equipment: "",
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
    description: "",
    age: "",
    height: "",
    weight: "",
    eyes: "",
    skin: "",
    hair: "",
    actionsDisplayThingy: null,
    errors: {},
    neededProfile: this.props.neededProfile,
    disabled: false,
    file: ""
  };

  componentWillMount = () => {
    let neededCharacter = this.state.neededProfile.characters.find(
      x => x._id === this.state.characterId
    );
    this.setState({
      name: neededCharacter.name,
      image: neededCharacter.image,
      player_name: neededCharacter.player_name,
      class_and_level: neededCharacter.class_and_level,
      race: neededCharacter.race,
      background: neededCharacter.background,
      factions: neededCharacter.factions,
      alignment: neededCharacter.alignment,
      experience_points: neededCharacter.experience_points,
      inspiration: neededCharacter.inspiration,
      proficiency_bonus: neededCharacter.proficiency_bonus,
      strength: neededCharacter.strength,
      dexterity: neededCharacter.dexterity,
      constitution: neededCharacter.constitution,
      intelligence: neededCharacter.intelligence,
      wisdom: neededCharacter.wisdom,
      charisma: neededCharacter.charisma,
      strength_save: neededCharacter.strength_save,
      dexterity_save: neededCharacter.dexterity_save,
      constitution_save: neededCharacter.constitution_save,
      intelligence_save: neededCharacter.intelligence_save,
      wisdom_save: neededCharacter.wisdom_save,
      charisma_save: neededCharacter.charisma_save,
      acrobatics: neededCharacter.acrobatics,
      animal_handling: neededCharacter.animal_handling,
      arcana: neededCharacter.arcana,
      athletics: neededCharacter.athletics,
      deception: neededCharacter.deception,
      history: neededCharacter.history,
      insight: neededCharacter.insight,
      intimidation: neededCharacter.intimidation,
      investigation: neededCharacter.investigation,
      medicine: neededCharacter.medicine,
      nature: neededCharacter.nature,
      perception: neededCharacter.perception,
      performance: neededCharacter.performance,
      persuasion: neededCharacter.persuasion,
      religion: neededCharacter.religion,
      sleight_of_hand: neededCharacter.sleight_of_hand,
      stealth: neededCharacter.stealth,
      survival: neededCharacter.survival,
      acrobatics_proficiency: neededCharacter.acrobatics_proficiency,
      animal_handling_proficiency: neededCharacter.animal_handling_proficiency,
      arcana_proficiency: neededCharacter.arcana_proficiency,
      athletics_proficiency: neededCharacter.athletics_proficiency,
      deception_proficiency: neededCharacter.deception_proficiency,
      history_proficiency: neededCharacter.history_proficiency,
      insight_proficiency: neededCharacter.insight_proficiency,
      intimidation_proficiency: neededCharacter.intimidation_proficiency,
      investigation_proficiency: neededCharacter.investigation_proficiency,
      medicine_proficiency: neededCharacter.medicine_proficiency,
      nature_proficiency: neededCharacter.nature_proficiency,
      perception_proficiency: neededCharacter.perception_proficiency,
      performance_proficiency: neededCharacter.performance_proficiency,
      persuasion_proficiency: neededCharacter.persuasion_proficiency,
      religion_proficiency: neededCharacter.religion_proficiency,
      sleight_of_hand_proficiency: neededCharacter.sleight_of_hand_proficiency,
      stealth_proficiency: neededCharacter.stealth_proficiency,
      survival_proficiency: neededCharacter.survival_proficiency,
      passive_perception: neededCharacter.passive_perception,
      other_proficiencies_and_languages:
        neededCharacter.other_proficiencies_and_languages,
      armor_class: neededCharacter.armor_class,
      initiative: neededCharacter.initiative,
      speed: neededCharacter.speed,
      hit_points: neededCharacter.hit_points,
      hit_dice: neededCharacter.hit_dice,
      death_successes: neededCharacter.death_successes,
      death_failures: neededCharacter.death_failures,
      actions: neededCharacter.actions,

      spellcasting_ability: neededCharacter.spellcasting_ability,
      spell_save_dc: neededCharacter.spell_save_dc,
      spell_attack_bonus: neededCharacter.spell_attack_bonus,
      action_names: [],
      action_descs: [],
      action_attack_bonuses: [],
      action_damage_bonuses: [],
      action_damage_dices: [],
      spells: neededCharacter.spells,
      spell_names: [],
      spell_casting_times: [],
      spell_ranges: [],
      spell_durations: [],
      spell_descriptions: [],
      spell_levels: [],
      spell_components: [],
      spell_schools: [],
      first_level_spell_slots: neededCharacter.first_level_spell_slots,
      second_level_spell_slots: neededCharacter.second_level_spell_slots,
      third_level_spell_slots: neededCharacter.third_level_spell_slots,
      fourth_level_spell_slots: neededCharacter.fourth_level_spell_slots,
      fifth_level_spell_slots: neededCharacter.fifth_level_spell_slots,
      sixth_level_spell_slots: neededCharacter.sixth_level_spell_slots,
      seventh_level_spell_slots: neededCharacter.seventh_level_spell_slots,
      eighth_level_spell_slots: neededCharacter.eighth_level_spell_slots,
      ninth_level_spell_slots: neededCharacter.ninth_level_spell_slots,
      features_and_traits: neededCharacter.features_and_traits,
      features_and_traits_names: [],
      features_and_traits_descriptions: [],
      personality_traits: neededCharacter.personality_traits,
      ideals: neededCharacter.ideals,
      bonds: neededCharacter.bonds,
      flaws: neededCharacter.flaws,
      damage_immunities: neededCharacter.damage_immunities,
      damage_resistances: neededCharacter.damage_resistances,
      damage_vulnerabilities: neededCharacter.damage_vulnerabilities,
      condition_immunities: neededCharacter.condition_immunities,
      backstory: neededCharacter.backstory,
      description: neededCharacter.description,
      age: neededCharacter.age,
      height: neededCharacter.height,
      weight: neededCharacter.weight,
      eyes: neededCharacter.eyes,
      skin: neededCharacter.skin,
      hair: neededCharacter.hair,
      equipment: neededCharacter.equipment,
      copper: neededCharacter.copper,
      silver: neededCharacter.silver,
      gold: neededCharacter.gold,
      electrum: neededCharacter.electrum,
      platinum: neededCharacter.platinum
    });
  };

  componentDidMount() {
    for (let i = 0; i < this.state.actions.length; i++) {
      let oldNames = this.state.action_names;
      oldNames[i] = this.state.actions[i].name;
      this.setState({ action_names: oldNames });

      let oldDescs = this.state.action_descs;
      oldDescs[i] = this.state.actions[i].desc;
      this.setState({ action_descs: oldDescs });

      let oldAttackBonuses = this.state.action_attack_bonuses;
      oldAttackBonuses[i] = this.state.actions[i].attack_bonus;
      this.setState({ action_attack_bonuses: oldAttackBonuses });

      let oldDamageDice = this.state.action_damage_dices;
      oldDamageDice[i] = this.state.actions[i].damage_dice;
      this.setState({ action_damage_dices: oldDamageDice });

      let oldDamageBonuses = this.state.action_damage_bonuses;
      oldDamageBonuses[i] = this.state.actions[i].damage_bonus;
      this.setState({ action_damage_bonuses: oldDamageBonuses });
    }

    for (let i = 0; i < this.state.spells.length; i++) {
      let oldNames = this.state.spell_names;
      oldNames[i] = this.state.spells[i].name;
      this.setState({ spell_names: oldNames });

      let oldDescs = this.state.spell_descriptions;
      oldDescs[i] = this.state.spells[i].desc;
      this.setState({ spell_descriptions: oldDescs });

      let oldSpellcastingTimes = this.state.spell_casting_times;
      oldSpellcastingTimes[i] = this.state.spells[i].casting_time;
      this.setState({ spell_casting_times: oldSpellcastingTimes });

      let oldSpellDurations = this.state.spell_durations;
      oldSpellDurations[i] = this.state.spells[i].duration;
      this.setState({ spell_durations: oldSpellDurations });

      let oldSpellLevels = this.state.spell_levels;
      oldSpellLevels[i] = this.state.spells[i].level;
      this.setState({ spell_levels: oldSpellLevels });

      let oldSpellRanges = this.state.spell_ranges;
      oldSpellRanges[i] = this.state.spells[i].range;
      this.setState({ spell_ranges: oldSpellRanges });

      let oldSpellComponents = this.state.spell_components;
      oldSpellComponents[i] = this.state.spells[i].components;
      this.setState({ spell_components: oldSpellComponents });

      let oldSpellSchools = this.state.spell_schools;
      oldSpellSchools[i] = this.state.spells[i].school;
      this.setState({ spell_schools: oldSpellSchools });

      let oldSpellsShow = this.state.spellsShow;
      oldSpellsShow[i] = "EditCharacterSpellMinimized";
      this.setState({ spellsShow: oldSpellsShow });
    }

    for (let i = 0; i < this.state.spellsShow.length; i++) {}

    for (let i = 0; i < this.state.features_and_traits.length; i++) {
      let oldNames = this.state.features_and_traits_names;
      oldNames[i] = this.state.features_and_traits[i].name;
      this.setState({ features_and_traits_names: oldNames });

      let oldDescriptions = this.state.features_and_traits_descriptions;
      oldDescriptions[i] = this.state.features_and_traits[i].description;
      this.setState({ features_and_traits_descriptions: oldDescriptions });
    }

    let skillProficiencies = document.getElementsByClassName(
      "EditCharacterSkillCheckbox"
    );
    for (let i = 0; i < skillProficiencies.length; i++) {
      if (this.state[skillProficiencies[i].name] === true) {
        skillProficiencies[i].checked = true;
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    let actionsArray = [];

    let spellsArray = [];
    let featuresArray = [];

    for (let i = 0; i < this.state.action_names.length; i++) {
      const newAction = {
        name: this.state.action_names[i],
        desc: this.state.action_descs[i],
        attack_bonus: this.state.action_attack_bonuses[i],
        damage_dice: this.state.action_damage_dices[i],
        damage_bonus: this.state.action_damage_bonuses[i]
      };
      actionsArray.push(newAction);
    }

    for (let i = 0; i < this.state.spell_names.length; i++) {
      const newSpell = {
        name: this.state.spell_names[i],
        level: this.state.spell_levels[i],
        desc: this.state.spell_descriptions[i],
        duration: this.state.spell_durations[i],
        casting_time: this.state.spell_casting_times[i],
        range: this.state.spell_ranges[i],
        school: this.state.spell_schools[i],
        components: this.state.spell_components[i]
      };
      spellsArray.push(newSpell);
    }

    for (let i = 0; i < this.state.features_and_traits_names.length; i++) {
      const newFeature = {
        name: this.state.features_and_traits_names[i],
        description: this.state.features_and_traits_descriptions[i]
      };
      featuresArray.push(newFeature);
    }

    const charData = {
      name: this.state.name,
      image: this.state.image,
      player_name: this.state.player_name,
      class_and_level: this.state.class_and_level,
      background: this.state.background,
      factions: this.state.factions,
      race: this.state.race,
      alignment: this.state.alignment,
      experience_points: this.state.experience_points,
      inspiration: this.state.inspiration,
      proficiency_bonus: this.state.proficiency_bonus,
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
      acrobatics_proficiency: this.state.acrobatics_proficiency,
      animal_handling_proficiency: this.state.animal_handling_proficiency,
      arcana_proficiency: this.state.arcana_proficiency,
      athletics_proficiency: this.state.athletics_proficiency,
      deception_proficiency: this.state.deception_proficiency,
      history_proficiency: this.state.history_proficiency,
      insight_proficiency: this.state.insight_proficiency,
      intimidation_proficiency: this.state.intimidation_proficiency,
      investigation_proficiency: this.state.investigation_proficiency,
      medicine_proficiency: this.state.medicine_proficiency,
      nature_proficiency: this.state.nature_proficiency,
      perception_proficiency: this.state.perception_proficiency,
      performance_proficiency: this.state.performance_proficiency,
      persuasion_proficiency: this.state.persuasion_proficiency,
      religion_proficiency: this.state.religion_proficiency,
      sleight_of_hand_proficiency: this.state.sleight_of_hand_proficiency,
      stealth_proficiency: this.state.stealth_proficiency,
      survival_proficiency: this.state.survival_proficiency,
      passive_perception: this.state.passive_perception,
      other_proficiencies_and_languages: this.state
        .other_proficiencies_and_languages,
      armor_class: this.state.armor_class,
      initiative: this.state.initiative,
      speed: this.state.speed,
      hit_points: this.state.hit_points,
      hit_dice: this.state.hit_dice,
      death_successes: this.state.death_successes,
      death_failures: this.state.death_failures,
      actions: actionsArray,
      spells: spellsArray,
      spellcasting_ability: this.state.spellcasting_ability,
      spell_save_dc: this.state.spell_save_dc,
      spell_attack_bonus: this.state.spell_attack_bonus,
      features_and_traits: featuresArray,
      personality_traits: this.state.personality_traits,
      ideals: this.state.ideals,
      bonds: this.state.bonds,
      flaws: this.state.flaws,
      damage_vulnerabilities: this.state.damage_vulnerabilities,
      damage_resistances: this.state.damage_resistances,
      damage_immunities: this.state.damage_immunities,
      condition_immunities: this.state.condition_immunities,
      first_level_spell_slots: this.state.first_level_spell_slots,
      second_level_spell_slots: this.state.second_level_spell_slots,
      third_level_spell_slots: this.state.third_level_spell_slots,
      fourth_level_spell_slots: this.state.fourth_level_spell_slots,
      fifth_level_spell_slots: this.state.fifth_level_spell_slots,
      sixth_level_spell_slots: this.state.sixth_level_spell_slots,
      seventh_level_spell_slots: this.state.seventh_level_spell_slots,
      eighth_level_spell_slots: this.state.eighth_level_spell_slots,
      ninth_level_spell_slots: this.state.ninth_level_spell_slots,
      equipment: this.state.equipment,
      copper: this.state.copper,
      silver: this.state.silver,
      gold: this.state.gold,
      electrum: this.state.electrum,
      platinum: this.state.platinum,
      backstory: this.state.backstory,
      description: this.state.description,
      age: this.state.age,
      height: this.state.height,
      weight: this.state.weight,
      eyes: this.state.eyes,
      skin: this.state.skin,
      hair: this.state.hair
    };
    this.props.editCharacter(
      charData,
      this.state.characterId,
      this.props.history
    );
  };

  addAction = () => {
    const oldActionNames = this.state.action_names;
    oldActionNames.push("");
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.push("");
    const oldActionAttackBonuses = this.state.action_attack_bonuses;
    oldActionAttackBonuses.push("");
    const oldActionDamageDie = this.state.action_damage_dices;
    oldActionDamageDie.push("");
    const oldActionDamageBonuses = this.state.action_damage_bonuses;
    oldActionDamageBonuses.push("");
    this.setState({
      action_names: oldActionNames,
      action_descs: oldActionDescriptions,
      action_attack_bonuses: oldActionAttackBonuses,
      action_damage_dices: oldActionDamageDie,
      action_damage_bonuses: oldActionDamageBonuses
    });
  };

  removeAction = index => {
    const oldActionNames = this.state.action_names;
    oldActionNames.splice(index, 1);
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.splice(index, 1);
    const oldActionAttackBonuses = this.state.action_attack_bonuses;
    oldActionAttackBonuses.splice(index, 1);
    const oldActionDamageDie = this.state.action_damage_dices;
    oldActionDamageDie.splice(index, 1);
    const oldActionDamageBonuses = this.state.action_damage_bonuses;
    oldActionDamageBonuses.splice(index, 1);

    this.setState({
      action_names: oldActionNames,
      action_descs: oldActionDescriptions,
      action_attack_bonuses: oldActionAttackBonuses,
      action_damage_dices: oldActionDamageDie,
      action_damage_bonuses: oldActionDamageBonuses
    });
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

  addFeature = () => {
    const oldFeatureNames = this.state.features_and_traits_names;
    const oldFeatureDescriptions = this.state.features_and_traits_descriptions;
    oldFeatureNames.push("");
    oldFeatureDescriptions.push("");
    this.setState({
      features_and_traits_names: oldFeatureNames,
      features_and_traits_descriptions: oldFeatureDescriptions
    });
  };

  removeFeature = index => {
    const oldFeatureNames = this.state.features_and_traits_names;
    const oldFeatureDescriptions = this.state.features_and_traits_descriptions;
    oldFeatureNames.splice(index, 1);
    oldFeatureDescriptions.splice(index, 1);
    this.setState({
      features_and_traits_names: oldFeatureNames,
      features_and_traits_descriptions: oldFeatureDescriptions
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

  changeActionAttackBonus = (index, e) => {
    let oldState = this.state.action_attack_bonuses;
    oldState[index] = e.target.value;
    this.setState({ action_attack_bonuses: oldState });
  };

  changeActionDamageBonus = (index, e) => {
    let oldState = this.state.action_damage_bonuses;
    oldState[index] = e.target.value;
    this.setState({ action_damage_bonuses: oldState });
  };

  changeActionDamageDie = (index, e) => {
    let oldState = this.state.action_damage_dices;
    oldState[index] = e.target.value;
    this.setState({ action_damage_dices: oldState });
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

  changeFeatureName = (index, e) => {
    let oldState = this.state.features_and_traits_names;
    oldState[index] = e.target.value;
    this.setState({ features_and_traits_names: oldState });
  };

  changeFeatureDescription = (index, e) => {
    let oldState = this.state.features_and_traits_descriptions;
    oldState[index] = e.target.value;
    this.setState({ features_and_traits_descriptions: oldState });
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

  changeProficiency = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  viewAppearance = () => {
    this.setState({
      showCharacterAppearance: "ShowCharacterSection",
      showCharacterQualities: "HideCharacterSection",
      showCharacterBackstory: "HideCharacterSection",
      characterAppearance: "CharacterClicked",
      characterQualities: "CharacterUnclicked",
      characterBackstory: "CharacterUnclicked"
    });
  };

  viewQualities = () => {
    this.setState({
      showCharacterAppearance: "HideCharacterSection",
      showCharacterQualities: "ShowCharacterSection",
      showCharacterBackstory: "HideCharacterSection",
      characterAppearance: "CharacterUnclicked",
      characterQualities: "CharacterClicked",
      characterBackstory: "CharacterUnclicked"
    });
  };

  viewBackstory = () => {
    this.setState({
      showCharacterAppearance: "HideCharacterSection",
      showCharacterQualities: "HideCharacterSection",
      showCharacterBackstory: "ShowCharacterSection",
      characterAppearance: "CharacterUnclicked",
      characterQualities: "CharacterUnclicked",
      characterBackstory: "CharacterClicked"
    });
  };

  viewActions = () => {
    this.setState({
      showCharacterActions: "ShowCombatHolder",
      showCharacterSpells: "HideCharacterSection",
      showCharacterFeatures: "HideCharacterSection",
      characterActions: "CharacterClicked",
      characterSpells: "CharacterUnclicked",
      characterFeatures: "CharacterUnclicked"
    });
  };

  viewSpells = () => {
    this.setState({
      showCharacterActions: "HideCharacterSection",
      showCharacterSpells: "ShowCombatHolder",
      showCharacterFeatures: "HideCharacterSection",
      characterActions: "CharacterUnclicked",
      characterSpells: "CharacterClicked",
      characterFeatures: "CharacterUnclicked"
    });
  };

  viewFeatures = () => {
    this.setState({
      showCharacterActions: "HideCharacterSection",
      showCharacterSpells: "HideCharacterSection",
      showCharacterFeatures: "ShowCombatHolder",
      characterActions: "CharacterUnclicked",
      characterSpells: "CharacterUnclicked",
      characterFeatures: "CharacterClicked"
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
          <div className="EditCharacterActionNameHolder">
            <input
              className="EditCharacterActionName"
              value={this.state.action_names[i]}
              onChange={this.changeActionName.bind(this, i)}
              maxLength="100"
            />
          </div>
          <div className="EditCharacterActionAttackBonusHolder">
            <input
              className="EditCharacterActionAttackBonus"
              value={this.state.action_attack_bonuses[i]}
              onChange={this.changeActionAttackBonus.bind(this, i)}
              maxLength="100"
            />
          </div>
          <div className="EditCharacterActionDamageDiceHolder">
            <input
              className="EditCharacterActionDamageDice"
              value={this.state.action_damage_dices[i]}
              onChange={this.changeActionDamageDie.bind(this, i)}
              maxLength="100"
            />
          </div>
          <div className="EditCharacterActionDamageBonusHolder">
            <input
              className="EditCharacterActionDamageBonus"
              value={this.state.action_damage_bonuses[i]}
              onChange={this.changeActionDamageBonus.bind(this, i)}
              maxLength="100"
            />
          </div>
          <div className="EditCharacterActionDescriptionHolder">
            <textarea
              className="EditCharacterActionDescription"
              value={this.state.action_descs[i]}
              onChange={this.changeActionDescription.bind(this, i)}
              maxLength="5000"
            />
          </div>
        </div>
      );
      actionList.push(action);
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
              className="EditCharacterAddSpellName"
              value={this.state.spell_names[i]}
              onChange={this.changeSpellName.bind(this, i)}
              maxLength="100"
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
              className="EditCharacterAddSpellSchool"
              value={this.state.spell_schools[i]}
              onChange={this.changeSpellSchool.bind(this, i)}
              maxLength="100"
            />
            <input
              className="EditCharacterAddSpellCastingTime"
              value={this.state.spell_casting_times[i]}
              onChange={this.changeSpellCastingTime.bind(this, i)}
              maxLength="100"
            />
            <input
              className="EditCharacterAddSpellRange"
              value={this.state.spell_ranges[i]}
              onChange={this.changeSpellRange.bind(this, i)}
              maxLength="100"
            />
            <input
              className="EditCharacterAddSpellComponents"
              value={this.state.spell_components[i]}
              onChange={this.changeSpellComponent.bind(this, i)}
              maxLength="100"
            />
            <input
              className="EditCharacterAddSpellDuration"
              value={this.state.spell_durations[i]}
              onChange={this.changeSpellDuration.bind(this, i)}
              maxLength="100"
            />

            <textarea
              className="EditCharacterAddSpellDescription"
              value={this.state.spell_descriptions[i]}
              onChange={this.changeSpellDescription.bind(this, i)}
              maxLength="5000"
            />
          </div>
        );
      }
    }
    let addSpell = (
      <div className={`DarkOverlay ${this.state.showAddSpell}`}>
        <div className="EditCharacterAddSpellNameText">Name</div>
        <div className="EditCharacterAddSpellLevelText">Level</div>
        <div className="EditCharacterAddSpellSchoolText">School</div>
        <div className="EditCharacterAddSpellCastingTimeText">Casting Time</div>
        <div className="EditCharacterAddSpellRangeText">Range</div>
        <div className="EditCharacterAddSpellComponentsText">Components</div>
        <div className="EditCharacterAddSpellDurationText">Duration</div>

        <input
          className="EditCharacterAddSpellName"
          name="addSpellName"
          value={this.state.addSpellName}
          onChange={this.onChange}
          maxLength="100"
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
          className="EditCharacterAddSpellSchool"
          name="addSpellSchool"
          value={this.state.addSpellSchool}
          onChange={this.onChange}
          maxLength="100"
        />

        <input
          className="EditCharacterAddSpellCastingTime"
          name="addSpellCastingTime"
          value={this.state.addSpellCastingTime}
          onChange={this.onChange}
          maxLength="100"
        />
        <input
          className="EditCharacterAddSpellRange"
          name="addSpellRange"
          value={this.state.addSpellRange}
          onChange={this.onChange}
          maxLength="100"
        />
        <input
          className="EditCharacterAddSpellComponents"
          name="addSpellComponents"
          value={this.state.addSpellComponents}
          onChange={this.onChange}
          maxLength="100"
        />
        <input
          className="EditCharacterAddSpellDuration"
          name="addSpellDuration"
          value={this.state.addSpellDuration}
          onChange={this.onChange}
          maxLength="100"
        />
        <textarea
          className="EditCharacterAddSpellDescription"
          name="addSpellDescription"
          value={this.state.addSpellDescription}
          onChange={this.onChange}
          maxLength="5000"
        />
        <div
          className="EditCharacterAddSpellMinimize"
          onClick={this.hideAddSpell}
        >
          <i className="fas fa-window-minimize" />
        </div>
        <div className="EditCharacterAddSpellButton" onClick={this.addSpell}>
          <div className="CenteredPlusNoColor">+</div>
        </div>
      </div>
    );

    const featuresList = [];
    for (let i = 0; i < this.state.features_and_traits_names.length; i++) {
      let feature = (
        <div key={`Feature${i}`} className="EditCharacterFeature">
          <div
            className="EditCharacterFeatureRemove"
            onClick={this.removeFeature.bind(this, i)}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
          <div className="EditCharacterFeatureNameHolder">
            <input
              className="EditCharacterActionName"
              value={this.state.features_and_traits_names[i]}
              onChange={this.changeFeatureName.bind(this, i)}
              maxLength="100"
            />
          </div>
          <div className="EditCharacterFeatureDescriptionHolder">
            <textarea
              className="EditCharacterActionDescription"
              value={this.state.features_and_traits_descriptions[i]}
              onChange={this.changeFeatureDescription.bind(this, i)}
              maxLength="5000"
            />
          </div>
        </div>
      );
      featuresList.push(feature);
    }

    let strengthModifier = Math.floor((this.state.strength - 10) / 2);
    let dexterityModifier = Math.floor((this.state.dexterity - 10) / 2);
    let constitutionModifier = Math.floor((this.state.constitution - 10) / 2);
    let intelligenceModifier = Math.floor((this.state.intelligence - 10) / 2);
    let wisdomModifier = Math.floor((this.state.wisdom - 10) / 2);
    let charismaModifier = Math.floor((this.state.charisma - 10) / 2);
    let addActionButton;
    let addSpellButton;
    let addFeatureButton;
    if (actionList.length >= 50) {
      addActionButton = <div className="Hidden" />;
    } else {
      addActionButton = (
        <div className="EditCharacterAddAction" onClick={this.addAction}>
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
    if (featuresList.length >= 50) {
      addFeatureButton = <div className="Hidden" />;
    } else {
      addFeatureButton = (
        <div className="EditCharacterAddAction" onClick={this.addFeature}>
          <div className="CenteredPlusNoColor">+</div>
        </div>
      );
    }

    return (
      <div>
        <div className="BookHolder">
          <img src={Book} alt="" className="ImageFill" />
        </div>
        <div
          className="GoBackBook"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to leave this page? Unsaved changes will be lost."
              )
            ) {
              window.location = "/characters";
            }
          }}
        >
          <div className="CenteredPlusNoColor">
            <i className="fas fa-arrow-left" />
            Go Back
          </div>
        </div>
        <div className="EditCharacterName ">
          <div className="EditCharacterText">Name</div>
          <input
            className={classnames("EditCharacterInput", {
              InvalidInput: errors.name
            })}
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
            maxLength="100"
          />
          {errors.name && <div className="FormError">{errors.name}</div>}
        </div>
        <div className="EditCharacterClassAndLevel ">
          <div className="EditCharacterText">Class and Level</div>
          <input
            className="EditCharacterInput"
            name="class_and_level"
            value={this.state.class_and_level}
            onChange={this.onChange}
            error={errors.class_and_level}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterBackground ">
          <div className="EditCharacterText">Background</div>
          <input
            className="EditCharacterInput"
            name="background"
            value={this.state.background}
            onChange={this.onChange}
            error={errors.background}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterPlayerName ">
          <div className="EditCharacterText">Player Name</div>
          <input
            className="EditCharacterInput"
            name="player_name"
            value={this.state.player_name}
            onChange={this.onChange}
            error={errors.player_name}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterProficiencyBonus ">
          <div className="EditCharacterText">Proficiency Bonus</div>
          <input
            className="EditCharacterInput"
            name="proficiency_bonus"
            type="number"
            value={this.state.proficiency_bonus}
            onChange={this.onChange}
            error={errors.proficiency_bonus}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterRace ">
          <div className="EditCharacterText">Race</div>
          <input
            className="EditCharacterInput"
            name="race"
            value={this.state.race}
            onChange={this.onChange}
            error={errors.race}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterAlignment ">
          <div className="EditCharacterText">Alignment</div>
          <input
            className="EditCharacterInput"
            name="alignment"
            value={this.state.alignment}
            onChange={this.onChange}
            error={errors.alignment}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterExperiencePoints ">
          <div className="EditCharacterText">Experience Points</div>
          <input
            className="EditCharacterInput"
            name="experience_points"
            type="number"
            value={this.state.experience_points}
            onChange={this.onChange}
            error={errors.experience_points}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterHitPoints ">
          <div className="EditCharacterSquareText">Hit Points</div>
          <input
            className="EditCharacterSquareInput"
            name="hit_points"
            value={this.state.hit_points}
            type="number"
            onChange={this.onChange}
            error={errors.hit_points}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterHitDice ">
          <div className="EditCharacterSquareText">Hit Dice</div>
          <input
            className="EditCharacterSquareInput"
            name="hit_dice"
            value={this.state.hit_dice}
            type="text"
            onChange={this.onChange}
            error={errors.hit_dice}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterArmorClass ">
          <div className="EditCharacterSquareText">Armor Class</div>
          <input
            className="EditCharacterSquareInput"
            name="armor_class"
            value={this.state.armor_class}
            type="number"
            onChange={this.onChange}
            error={errors.armor_class}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterSpeed ">
          <div className="EditCharacterSquareText">Speed</div>
          <input
            className="EditCharacterSquareInput"
            name="speed"
            value={this.state.speed}
            type="number"
            onChange={this.onChange}
            error={errors.speed}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterInitiative ">
          <div className="EditCharacterSquareText">Initiative</div>
          <input
            className="EditCharacterSquareInput"
            name="initiative"
            value={this.state.initiative}
            type="number"
            onChange={this.onChange}
            error={errors.initiative}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterInspiration ">
          <div className="EditCharacterSquareText">Inspiration</div>
          <input
            className="EditCharacterSquareInput"
            name="inspiration"
            value={this.state.inspiration}
            type="text"
            onChange={this.onChange}
            error={errors.inspiration}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterStrengthSave ">
          <div className="EditCharacterSquareText">Strength Save</div>
          <input
            className="EditCharacterSquareInput"
            name="strength_save"
            value={this.state.strength_save}
            type="number"
            onChange={this.onChange}
            error={errors.strength_save}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterDexteritySave ">
          <div className="EditCharacterSquareText">Dexterity Save</div>
          <input
            className="EditCharacterSquareInput"
            name="dexterity_save"
            value={this.state.dexterity_save}
            type="number"
            onChange={this.onChange}
            error={errors.dexterity_save}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterConstitutionSave ">
          <div className="EditCharacterSquareText">Constitution Save</div>
          <input
            className="EditCharacterSquareInput"
            name="constitution_save"
            value={this.state.constitution_save}
            type="number"
            onChange={this.onChange}
            error={errors.constitution_save}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterIntelligenceSave ">
          <div className="EditCharacterSquareText">Intelligence Save</div>
          <input
            className="EditCharacterSquareInput"
            name="intelligence_save"
            value={this.state.intelligence_save}
            type="number"
            onChange={this.onChange}
            error={errors.intelligence_save}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterWisdomSave ">
          <div className="EditCharacterSquareText">Wisdom Save</div>
          <input
            className="EditCharacterSquareInput"
            name="wisdom_save"
            value={this.state.wisdom_save}
            type="number"
            onChange={this.onChange}
            error={errors.wisdom_save}
            maxLength="100"
          />
        </div>
        <div className="EditCharacterCharismaSave ">
          <div className="EditCharacterSquareText">Charisma Save</div>
          <input
            className="EditCharacterSquareInput"
            name="charisma_save"
            value={this.state.charisma_save}
            type="number"
            onChange={this.onChange}
            error={errors.charisma_save}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterStrengthDisplay ">
          STR
          <div className="EncounterCharacterEnlargedInput">
            {strengthModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="strength"
              value={this.state.strength}
              type="number"
              onChange={this.onChange}
              error={errors.strength}
              maxLength="100"
            />
          </div>
        </div>

        <div className="EditCharacterDexterityDisplay ">
          DEX
          <div className="EncounterCharacterEnlargedInput">
            {dexterityModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="dexterity"
              value={this.state.dexterity}
              type="number"
              onChange={this.onChange}
              error={errors.dexterity}
              maxLength="100"
            />
          </div>
        </div>
        <div className="EditCharacterConstitutionDisplay ">
          CON
          <div className="EncounterCharacterEnlargedInput">
            {constitutionModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="constitution"
              value={this.state.constitution}
              type="number"
              onChange={this.onChange}
              error={errors.constitution}
              maxLength="100"
            />
          </div>
        </div>
        <div className="EditCharacterIntelligenceDisplay ">
          INT
          <div className="EncounterCharacterEnlargedInput">
            {intelligenceModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="intelligence"
              value={this.state.intelligence}
              type="number"
              onChange={this.onChange}
              error={errors.intelligence}
              maxLength="100"
            />
          </div>
        </div>
        <div className="EditCharacterWisdomDisplay ">
          WIS
          <div className="EncounterCharacterEnlargedInput">
            {wisdomModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="wisdom"
              value={this.state.wisdom}
              type="number"
              onChange={this.onChange}
              error={errors.wisdom}
              maxLength="100"
            />
          </div>
        </div>
        <div className="EditCharacterCharismaDisplay ">
          CHA
          <div className="EncounterCharacterEnlargedInput">
            {charismaModifier}
          </div>
          <div className="EncounterCharacterEnlargedModifier">
            <input
              className="ModifierText"
              name="charisma"
              value={this.state.charisma}
              type="number"
              onChange={this.onChange}
              error={errors.charisma}
              maxLength="100"
            />
          </div>
        </div>

        <div className="EditCharacterOtherProficienciesAndLanguages ">
          <div className="EditCharacterOtherProficienciesAndLanguagesText">
            Other Proficiencies And Languages
          </div>
          <textarea
            className="EditCharacterOtherProficienciesAndLanguagesInput"
            name="other_proficiencies_and_languages"
            value={this.state.other_proficiencies_and_languages}
            onChange={this.onChange}
            error={errors.other_proficiencies_and_languages}
            maxLength="5000"
          />
        </div>

        <div className="EditCharacterDamageVulnerabilities ">
          <div className="EditCharacterText">Damage Vulnerabilities</div>
          <input
            className="EditCharacterInput"
            name="damage_vulnerabilities"
            value={this.state.damage_vulnerabilities}
            onChange={this.onChange}
            maxLength="1000"
          />
        </div>
        <div className="EditCharacterDamageResistances ">
          <div className="EditCharacterText">Damage Resistances</div>
          <input
            className="EditCharacterInput"
            name="damage_resistances"
            value={this.state.damage_resistances}
            onChange={this.onChange}
            maxLength="1000"
          />
        </div>
        <div className="EditCharacterDamageImmunities ">
          <div className="EditCharacterText">Damage Immunities</div>
          <input
            className="EditCharacterInput"
            name="damage_immunities"
            value={this.state.damage_immunities}
            onChange={this.onChange}
            maxLength="1000"
          />
        </div>
        <div className="EditCharacterConditionImmunities ">
          <div className="EditCharacterText">Condition Immunities</div>
          <input
            className="EditCharacterInput"
            name="condition_immunities"
            value={this.state.condition_immunities}
            onChange={this.onChange}
            maxLength="1000"
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
            <div className="EditCharacterAge ">
              <div className="EditCharacterText">Age</div>
              <input
                className="EditCharacterInput"
                name="age"
                value={this.state.age}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterHeight ">
              <div className="EditCharacterText">Height</div>
              <input
                className="EditCharacterInput"
                name="height"
                value={this.state.height}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterWeight ">
              <div className="EditCharacterText">Weight</div>
              <input
                className="EditCharacterInput"
                name="weight"
                value={this.state.weight}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterEyes ">
              <div className="EditCharacterText">Eyes</div>
              <input
                className="EditCharacterInput"
                name="eyes"
                value={this.state.eyes}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkin ">
              <div className="EditCharacterText">Skin</div>
              <input
                className="EditCharacterInput"
                name="skin"
                value={this.state.skin}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterHair ">
              <div className="EditCharacterText">Hair</div>
              <input
                className="EditCharacterInput"
                name="hair"
                value={this.state.hair}
                onChange={this.onChange}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterDescription ">
              <div className="EditCharacterOtherProficienciesAndLanguagesText">
                Description
              </div>
              <textarea
                className="EditCharacterOtherProficienciesAndLanguagesInput"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
          </div>
          <div
            className={`EditCharacterQualities ${
              this.state.characterQualities
            }`}
            onClick={this.viewQualities}
          >
            <div className="BuildingOwnersText">Qualities</div>
          </div>
          <div className={this.state.showCharacterQualities}>
            <div className="EditCharacterPersonalityTraits ">
              <div className="EditCharacterQualitiesText">
                Personality Traits
              </div>
              <textarea
                className="EditCharacterQualitiesInput"
                name="personality_traits"
                value={this.state.personality_traits}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
            <div className="EditCharacterIdeals ">
              <div className="EditCharacterQualitiesText">Ideals</div>
              <textarea
                className="EditCharacterQualitiesInput"
                name="ideals"
                value={this.state.ideals}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
            <div className="EditCharacterBonds ">
              <div className="EditCharacterQualitiesText">Bonds</div>
              <textarea
                className="EditCharacterQualitiesInput"
                name="bonds"
                value={this.state.bonds}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
            <div className="EditCharacterFlaws ">
              <div className="EditCharacterQualitiesText">Flaws</div>
              <textarea
                className="EditCharacterQualitiesInput"
                name="flaws"
                value={this.state.flaws}
                onChange={this.onChange}
                maxLength="5000"
              />
            </div>
          </div>
          <div
            className={`EditCharacterBackstory ${
              this.state.characterBackstory
            }`}
            onClick={this.viewBackstory}
          >
            <div className="BuildingOwnersText">Backstory</div>
          </div>
          <div className={this.state.showCharacterBackstory}>
            <textarea
              className="EditCharacterBackstoryText"
              name="backstory"
              value={this.state.backstory}
              onChange={this.onChange}
              maxLength="5000"
            />
          </div>
        </div>

        <div className="EditCharacterFactions ">
          <div className="EditCharacterOtherProficienciesAndLanguagesText">
            Factions
          </div>
          <textarea
            className="EditCharacterOtherProficienciesAndLanguagesInput"
            name="factions"
            value={this.state.factions}
            onChange={this.onChange}
            error={errors.factions}
            maxLength="5000"
          />
        </div>

        <div className="EditCharacterCombatHolder ">
          <div
            className={`EditCharacterActions ${this.state.characterActions}`}
            onClick={this.viewActions}
          >
            <div className="BuildingOwnersText">Actions</div>
          </div>
          <div className={this.state.showCharacterActions}>
            <div className="EditCharacterActionNameLabel">Name</div>
            <div className="EditCharacterActionAttackBonusLabel">
              Attack Bonus
            </div>
            <div className="EditCharacterActionDamageDiceLabel">
              Damage Dice
            </div>
            <div className="EditCharacterActionDamageBonusLabel">
              Damage Bonus
            </div>
            <div className="EditCharacterActionDescriptionLabel">
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
            <div className="EditCharacterSpellcastingAbility ">
              <div className="EditCharacterSpellcastingText">
                Spellcasting Ability
              </div>
              <input
                className="EditCharacterSpellcastingInput"
                name="spellcasting_ability"
                value={this.state.spellcasting_ability}
                onChange={this.onChange}
                error={errors.spellcasting_ability}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSpellSaveDC ">
              <div className="EditCharacterSpellcastingText">Spell Save DC</div>
              <input
                className="EditCharacterSpellcastingInput"
                type="number"
                name="spell_save_dc"
                value={this.state.spell_save_dc}
                onChange={this.onChange}
                error={errors.spell_save_dc}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSpellAttackBonus ">
              <div className="EditCharacterSpellcastingText">
                Spell Attack Bonus
              </div>
              <input
                className="EditCharacterSpellcastingInput"
                type="number"
                name="spell_attack_bonus"
                value={this.state.spell_attack_bonus}
                onChange={this.onChange}
                error={errors.spell_attack_bonus}
                maxLength="100"
              />
            </div>

            <div className="EditCharacterCantrips">
              <div className="EditCharacterSpellLevelDisplayText">Cantrips</div>
              {cantripList}
            </div>
            <div className="EditCharacterFirstLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">1st</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="first_level_spell_slots"
                value={this.state.first_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {firstLevelSpellList}
            </div>
            <div className="EditCharacterSecondLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">2nd</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="second_level_spell_slots"
                value={this.state.second_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {secondLevelSpellList}
            </div>
            <div className="EditCharacterThirdLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">3rd</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="third_level_spell_slots"
                value={this.state.third_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {thirdLevelSpellList}
            </div>
            <div className="EditCharacterFourthLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">4th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="fourth_level_spell_slots"
                value={this.state.fourth_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {fourthLevelSpellList}
            </div>
            <div className="EditCharacterFifthLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">5th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="fifth_level_spell_slots"
                value={this.state.fifth_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {fifthLevelSpellList}
            </div>
            <div className="EditCharacterSixthLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">6th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="sixth_level_spell_slots"
                value={this.state.sixth_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {sixthLevelSpellList}
            </div>
            <div className="EditCharacterSeventhLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">7th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="seventh_level_spell_slots"
                value={this.state.seventh_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {seventhLevelSpellList}
            </div>
            <div className="EditCharacterEighthLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">8th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="eighth_level_spell_slots"
                value={this.state.eighth_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {eighthLevelSpellList}
            </div>
            <div className="EditCharacterNinthLevelSpells">
              <div className="EditCharacterSpellLevelDisplayText">9th</div>
              <input
                className="EditCharacterSpellSlot"
                placeholder="Slots"
                name="ninth_level_spell_slots"
                value={this.state.ninth_level_spell_slots}
                type="number"
                onChange={this.onChange}
                maxLength="100"
              />
              {ninthLevelSpellList}
            </div>
            {maximizeSpell}
            {addSpell}
            {addSpellButton}
          </div>

          <div
            className={`EditCharacterFeatures ${this.state.characterFeatures}`}
            onClick={this.viewFeatures}
          >
            <div className="BuildingOwnersText">Features</div>
          </div>
          <div className={this.state.showCharacterFeatures}>
            <div className="EditCharacterFeatureNameLabel">Name</div>
            <div className="EditCharacterFeatureDescriptionLabel">
              Description
            </div>
            <div className="EditCharacterActionMakeSpace" />

            {featuresList}
            {addFeatureButton}
          </div>
        </div>
        <div className="EditCharacterSkills ">
          <div className="EditCharacterSkillHeaderText">Skills</div>
          <div className="EditCharacterSkillList">
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.acrobatics_proficiency}
                className="EditCharacterSkillCheckbox"
                name="acrobatics_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Acrobatics <small>(DEX)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="acrobatics"
                value={this.state.acrobatics}
                type="number"
                onChange={this.onChange}
                error={errors.acrobatics}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.animal_handling_proficiency}
                className="EditCharacterSkillCheckbox"
                name="animal_handling_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Animal Handling <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="animal_handling"
                value={this.state.animal_handling}
                type="number"
                onChange={this.onChange}
                error={errors.animal_handling}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.arcana_proficiency}
                className="EditCharacterSkillCheckbox"
                name="arcana_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Arcana <small>(INT)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="arcana"
                value={this.state.arcana}
                type="number"
                onChange={this.onChange}
                error={errors.arcana}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.athletics_proficiency}
                className="EditCharacterSkillCheckbox"
                name="athletics_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Athletics <small>(STR)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="athletics"
                value={this.state.athletics}
                type="number"
                onChange={this.onChange}
                error={errors.athletics}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.deception_proficiency}
                className="EditCharacterSkillCheckbox"
                name="deception_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Deception <small>(CHA)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="deception"
                value={this.state.deception}
                type="number"
                onChange={this.onChange}
                error={errors.deception}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.history_proficiency}
                className="EditCharacterSkillCheckbox"
                name="history_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                History <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="history"
                value={this.state.history}
                type="number"
                onChange={this.onChange}
                error={errors.history}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.insight_proficiency}
                className="EditCharacterSkillCheckbox"
                name="insight_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Insight <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="insight"
                value={this.state.insight}
                type="number"
                onChange={this.onChange}
                error={errors.insight}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.intimidation_proficiency}
                className="EditCharacterSkillCheckbox"
                name="intimidation_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Intimidation <small>(CHA)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="intimidation"
                value={this.state.intimidation}
                type="number"
                onChange={this.onChange}
                error={errors.intimidation}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.investigation_proficiency}
                className="EditCharacterSkillCheckbox"
                name="investigation_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Investigation <small>(INT)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="investigation"
                value={this.state.investigation}
                type="number"
                onChange={this.onChange}
                error={errors.investigation}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.medicine_proficiency}
                className="EditCharacterSkillCheckbox"
                name="medicine_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Medicine <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="medicine"
                value={this.state.medicine}
                type="number"
                onChange={this.onChange}
                error={errors.medicine}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.nature_proficiency}
                className="EditCharacterSkillCheckbox"
                name="nature_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Nature <small>(INT)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="nature"
                value={this.state.nature}
                type="number"
                onChange={this.onChange}
                error={errors.nature}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.perception_proficiency}
                className="EditCharacterSkillCheckbox"
                name="perception_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Perception <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="perception"
                value={this.state.perception}
                type="number"
                onChange={this.onChange}
                error={errors.perception}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.performance_proficiency}
                className="EditCharacterSkillCheckbox"
                name="performance_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Performance <small>(CHA)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="performance"
                value={this.state.performance}
                type="number"
                onChange={this.onChange}
                error={errors.performance}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.persuasion_proficiency}
                className="EditCharacterSkillCheckbox"
                name="persuasion_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Persuasion <small>(CHA)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="persuasion"
                value={this.state.persuasion}
                type="number"
                onChange={this.onChange}
                error={errors.persuasion}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.religion_proficiency}
                className="EditCharacterSkillCheckbox"
                name="religion_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Religion <small>(INT)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="religion"
                value={this.state.religion}
                type="number"
                onChange={this.onChange}
                error={errors.religion}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.sleight_of_hand_proficiency}
                className="EditCharacterSkillCheckbox"
                name="sleight_of_hand_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Sleight of Hand <small>(DEX)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="sleight_of_hand"
                value={this.state.sleight_of_hand}
                type="number"
                onChange={this.onChange}
                error={errors.sleight_of_hand}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.stealth_proficiency}
                className="EditCharacterSkillCheckbox"
                name="stealth_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Stealth <small>(DEX)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="stealth"
                value={this.state.stealth}
                type="number"
                onChange={this.onChange}
                error={errors.stealth}
                maxLength="100"
              />
            </div>
            <div className="EditCharacterSkillHolder">
              <input
                type="checkbox"
                value={this.state.survival_proficiency}
                className="EditCharacterSkillCheckbox"
                name="survival_proficiency"
                onChange={this.changeProficiency}
              />
              <div className="EditCharacterSkillText">
                Survival <small>(WIS)</small>
              </div>
              <input
                className="EditCharacterSkill"
                name="survival"
                value={this.state.survival}
                type="number"
                onChange={this.onChange}
                error={errors.survival}
                maxLength="100"
              />
            </div>
          </div>
        </div>

        <div className="EditCharacterPassivePerception ">
          <div className="EditCharacterPassivePerceptionText">
            Passive Perception
          </div>
          <input
            className="EditCharacterInput"
            name="passive_perception"
            value={this.state.passive_perception}
            onChange={this.onChange}
            maxLength="100"
          />
        </div>

        <div className="EditCharacterEquipmentHolder ">
          <div className="EditCharacterCopper ">
            <div className="EditCharacterText">Copper</div>
            <input
              className="EditCharacterInput"
              name="copper"
              value={this.state.copper}
              onChange={this.onChange}
              type="number"
              maxLength="100"
            />
          </div>
          <div className="EditCharacterSilver ">
            <div className="EditCharacterText">Silver</div>
            <input
              className="EditCharacterInput"
              name="silver"
              value={this.state.silver}
              onChange={this.onChange}
              type="number"
              maxLength="100"
            />
          </div>
          <div className="EditCharacterGold ">
            <div className="EditCharacterText">Gold</div>
            <input
              className="EditCharacterInput"
              name="gold"
              value={this.state.gold}
              onChange={this.onChange}
              type="number"
              maxLength="100"
            />
          </div>
          <div className="EditCharacterElectrum ">
            <div className="EditCharacterText">Electrum</div>
            <input
              className="EditCharacterInput"
              name="electrum"
              value={this.state.electrum}
              onChange={this.onChange}
              type="number"
              maxLength="100"
            />
          </div>
          <div className="EditCharacterPlatinum ">
            <div className="EditCharacterText">Platinum</div>
            <input
              className="EditCharacterInput"
              name="platinum"
              value={this.state.platinum}
              onChange={this.onChange}
              type="number"
              maxLength="100"
            />
          </div>
          <div className="EditCharacterEquipment ">
            <div className="EditCharacterEquipmentText">Equipment</div>
            <textarea
              className="EditCharacterEquipmentInput"
              name="equipment"
              value={this.state.equipment}
              onChange={this.onChange}
              maxLength="5000"
            />
          </div>
        </div>

        <div
          onClick={this.onSubmit}
          className="BookSubmitButton CharacterColor"
        >
          <div className="ButtonColorHelper">
            <div className="CenteredPlusNoColor">Save Character</div>
          </div>
        </div>
      </div>
    );
  }
}

EditCharacter.propTypes = {
  editCharacter: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { editCharacter }
)(withRouter(EditCharacter));
