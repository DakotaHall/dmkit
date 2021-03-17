import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Page from "../../../images/pages.png";
import RemoveButton from "../../../images/purple_x.png";
import Book from "../../../images/book_dmkit_cropped.png";
import Blinded from "../../../images/blinded_black.png";
import Charmed from "../../../images/charmed_black.png";
import Deafened from "../../../images/deafened_black.png";
import Frightened from "../../../images/freightened_black.png";
import Exhaustion from "../../../images/exhausted_black.png";
import ExhaustionEffects from "../../../images/exhaustedFX_black.png";
import Grappled from "../../../images/grappled_black.png";
import Incapacitated from "../../../images/incapitated_black.png";
import Invisible from "../../../images/invisible_black.png";
import Paralyzed from "../../../images/paralyzed_black.png";
import Petrified from "../../../images/petrified_black.png";
import Poisoned from "../../../images/poison_black.png";
import Prone from "../../../images/prone_black.png";
import Restrained from "../../../images/restrained_black.png";
import Stunned from "../../../images/stunned_black.png";
import Unconscious from "../../../images/unconscious_black.png";
import BlindedWhite from "../../../images/blinded_white.png";
import CharmedWhite from "../../../images/charmed_white.png";
import DeafenedWhite from "../../../images/deafened_white.png";
import FrightenedWhite from "../../../images/freightened_white.png";
import ExhaustionWhite from "../../../images/exhausted_white.png";
import ExhaustionEffectsWhite from "../../../images/exhaustedFX_white.png";
import GrappledWhite from "../../../images/grappled_white.png";
import IncapacitatedWhite from "../../../images/incapitated_white.png";
import InvisibleWhite from "../../../images/invisible_white.png";
import ParalyzedWhite from "../../../images/paralyzed_white.png";
import PetrifiedWhite from "../../../images/petrified_white.png";
import PoisonedWhite from "../../../images/poison_white.png";
import ProneWhite from "../../../images/prone_whitepng.png";
import RestrainedWhite from "../../../images/restrained_white.png";
import StunnedWhite from "../../../images/stunned_white.png";
import UnconsciousWhite from "../../../images/unconscious_white.png";
class IndividualMonster extends Component {
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
    monsterName: "",
    blinded: false,
    charmed: false,
    deafened: false,
    frightened: false,
    exhaustion: false,
    exhaustion_levels: "",
    grappled: false,
    incapacitated: false,
    invisible: false,
    paralyzed: false,
    petrified: false,
    poisoned: false,
    prone: false,
    restrained: false,
    stunned: false,
    unconscious: false,
    blindedClicked: "ConditionUnclicked",
    charmedClicked: "ConditionUnclicked",
    deafenedClicked: "ConditionUnclicked",
    frightenedClicked: "ConditionUnclicked",
    exhaustionClicked: "ConditionUnclicked",
    exhaustion_levelsClicked: "",
    grappledClicked: "ConditionUnclicked",
    incapacitatedClicked: "ConditionUnclicked",
    invisibleClicked: "ConditionUnclicked",
    paralyzedClicked: "ConditionUnclicked",
    petrifiedClicked: "ConditionUnclicked",
    poisonedClicked: "ConditionUnclicked",
    proneClicked: "ConditionUnclicked",
    restrainedClicked: "ConditionUnclicked",
    stunnedClicked: "ConditionUnclicked",
    unconsciousClicked: "ConditionUnclicked",
    neededProfile: this.props.neededProfile,
    _id: this.props.monster._id,
    encounterCharacterSize: "EncounterCharacterStats",
    errors: {},
    disabled: false,
    file: ""
  };

  UNSAFE_componentWillMount = () => {
    this.setState(
      {
        name: this.props.monster.name,
        image: this.props.monster.image,
        monsterName: this.props.monsterName,
        alignment: this.props.monster.alignment,
        loot: this.props.monster.loot,
        description: this.props.monster.description,
        strength: this.props.monster.strength,
        dexterity: this.props.monster.dexterity,
        constitution: this.props.monster.constitution,
        intelligence: this.props.monster.intelligence,
        wisdom: this.props.monster.wisdom,
        charisma: this.props.monster.charisma,
        strength_save: this.props.monster.strength_save,
        dexterity_save: this.props.monster.dexterity_save,
        constitution_save: this.props.monster.constitution_save,
        intelligence_save: this.props.monster.intelligence_save,
        wisdom_save: this.props.monster.wisdom_save,
        charisma_save: this.props.monster.charisma_save,
        acrobatics: this.props.monster.acrobatics,
        animal_handling: this.props.monster.animal_handling,
        arcana: this.props.monster.arcana,
        athletics: this.props.monster.athletics,
        deception: this.props.monster.deception,
        history: this.props.monster.history,
        insight: this.props.monster.insight,
        intimidation: this.props.monster.intimidation,
        investigation: this.props.monster.investigation,
        medicine: this.props.monster.medicine,
        nature: this.props.monster.nature,
        perception: this.props.monster.perception,
        performance: this.props.monster.performance,
        persuasion: this.props.monster.persuasion,
        religion: this.props.monster.religion,
        sleight_of_hand: this.props.monster.sleight_of_hand,
        stealth: this.props.monster.stealth,
        survival: this.props.monster.survival,
        armor_class: this.props.monster.armor_class,
        speed: this.props.monster.speed,
        hit_points: this.props.monster.hit_points,
        hit_dice: this.props.monster.hit_dice,
        actions: this.props.monster.actions,
        action_names: [],
        action_descs: [],
        legendary_actions: this.props.monster.legendary_actions,
        legendary_action_names: [],
        legendary_action_descs: [],
        special_abilities: this.props.monster.special_abilities,
        special_ability_names: [],
        special_ability_descs: [],
        regional_effects: this.props.monster.regional_effects,

        regional_effect_descs: [],
        lair_actions: this.props.monster.lair_actions,

        lair_action_descs: [],
        spells: this.props.monster.spells,
        spell_names: [],
        spell_schools: [],
        spell_components: [],
        spell_casting_times: [],
        spell_ranges: [],
        spell_durations: [],
        spell_descriptions: [],
        spell_levels: [],
        spellcasting_ability: this.props.monster.spellcasting_ability,
        spell_save_dc: this.props.monster.spell_save_dc,
        spell_attack_bonus: this.props.monster.spell_attack_bonus,
        damage_vulnerabilities: this.props.monster.damage_vulnerabilities,
        damage_resistances: this.props.monster.damage_resistances,
        damage_immunities: this.props.monster.damage_immunities,
        condition_immunities: this.props.monster.condition_immunities,
        challenge_rating: this.props.monster.challenge_rating,
        size: this.props.monster.size,
        type: this.props.monster.type,
        subtype: this.props.monster.subtype,
        senses: this.props.monster.senses,
        languages: this.props.monster.languages,
        information: this.props.monster.information,
        first_level_spell_slots: this.props.monster.first_level_spell_slots,
        second_level_spell_slots: this.props.monster.second_level_spell_slots,
        third_level_spell_slots: this.props.monster.third_level_spell_slots,
        fourth_level_spell_slots: this.props.monster.fourth_level_spell_slots,
        fifth_level_spell_slots: this.props.monster.fifth_level_spell_slots,
        sixth_level_spell_slots: this.props.monster.sixth_level_spell_slots,
        seventh_level_spell_slots: this.props.monster.seventh_level_spell_slots,
        eighth_level_spell_slots: this.props.monster.eighth_level_spell_slots,
        ninth_level_spell_slots: this.props.monster.ninth_level_spell_slots
      },
      () => {
        for (let i = 0; i < this.state.actions.length; i++) {
          let oldNames = this.state.action_names;
          oldNames[i] = this.state.actions[i].name;
          this.setState({ action_names: oldNames });

          let oldDescs = this.state.action_descs;
          oldDescs[i] = this.state.actions[i].desc;
          this.setState({ action_descs: oldDescs });
        }

        for (let i = 0; i < this.state.lair_actions.length; i++) {
          let oldDescs = this.state.lair_action_descs;
          oldDescs[i] = this.state.lair_actions[i].desc;
          this.setState({ lair_action_descs: oldDescs });
        }

        for (let i = 0; i < this.state.regional_effects.length; i++) {
          let oldDescs = this.state.regional_effect_descs;
          oldDescs[i] = this.state.regional_effects[i].desc;
          this.setState({ regional_effect_descs: oldDescs });
        }

        for (let i = 0; i < this.state.spells.length; i++) {
          let oldNames = this.state.spell_names;
          oldNames[i] = this.state.spells[i].name;
          this.setState({ spell_names: oldNames });

          let oldDescs = this.state.spell_descriptions;
          oldDescs[i] = this.state.spells[i].desc;
          this.setState({ spell_descriptions: oldDescs });

          let oldSchools = this.state.spell_schools;
          oldSchools[i] = this.state.spells[i].desc;
          this.setState({ spell_schools: oldSchools });

          let oldComponents = this.state.spell_components;
          oldComponents[i] = this.state.spells[i].desc;
          this.setState({ spell_components: oldComponents });

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

          let oldSpellsShow = this.state.spellsShow;
          oldSpellsShow[i] = "EditCharacterSpellMinimized";
          this.setState({ spellsShow: oldSpellsShow });
        }

        for (let i = 0; i < this.state.special_abilities.length; i++) {
          let oldNames = this.state.special_ability_names;
          oldNames[i] = this.state.special_abilities[i].name;
          this.setState({ special_ability_names: oldNames });

          let oldDescs = this.state.special_ability_descs;
          oldDescs[i] = this.state.special_abilities[i].desc;
          this.setState({ special_ability_descs: oldDescs });
        }

        for (let i = 0; i < this.state.legendary_actions.length; i++) {
          let oldNames = this.state.legendary_action_names;
          oldNames[i] = this.state.legendary_actions[i].name;
          this.setState({ legendary_action_names: oldNames });

          let oldDescs = this.state.legendary_action_descs;
          oldDescs[i] = this.state.legendary_actions[i].desc;
          this.setState({ legendary_action_descs: oldDescs });
        }
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.monsterName !== prevProps.monsterName) {
      let newActionNames = [];
      let newActionDescs = [];
      for (let i = 0; i < this.props.monster.actions.length; i++) {
        newActionNames.push(this.props.monster.actions[i].name);
        newActionDescs.push(this.props.monster.actions[i].desc);
      }

      let newSpellNames = [];
      let newSpellLevels = [];
      let newSpellSchools = [];
      let newSpellCastingTimes = [];
      let newSpellRanges = [];
      let newSpellComponents = [];
      let newSpellDurations = [];
      let newSpellDescriptions = [];
      for (let i = 0; i < this.props.monster.spells.length; i++) {
        newSpellNames.push(this.props.monster.spells[i].name);
        newSpellLevels.push(this.props.monster.spells[i].level);
        newSpellSchools.push(this.props.monster.spells[i].school);
        newSpellCastingTimes.push(this.props.monster.spells[i].casting_time);
        newSpellRanges.push(this.props.monster.spells[i].range);
        newSpellComponents.push(this.props.monster.spells[i].components);
        newSpellDurations.push(this.props.monster.spells[i].duration);
        newSpellDescriptions.push(this.props.monster.spells[i].desc);
      }

      let newLegendaryActionNames = [];
      let newLegendaryActionDescriptions = [];

      for (let i = 0; i < this.props.monster.legendary_actions.length; i++) {
        newLegendaryActionNames.push(
          this.props.monster.legendary_actions[i].name
        );
        newLegendaryActionDescriptions.push(
          this.props.monster.legendary_actions[i].desc
        );
      }

      let newSpecialAbilityNames = [];
      let newSpecialAbilityDescriptions = [];

      for (let i = 0; i < this.props.monster.special_abilities.length; i++) {
        newSpecialAbilityNames.push(
          this.props.monster.special_abilities[i].name
        );
        newSpecialAbilityDescriptions.push(
          this.props.monster.special_abilities[i].desc
        );
      }

      let newLairActions = [];
      let newRegionalEffects = [];
      for (let i = 0; i < this.props.monster.lair_actions.length; i++) {
        newLairActions.push(this.props.monster.lair_actions[i].desc);
      }
      for (let i = 0; i < this.props.monster.regional_effects.length; i++) {
        newRegionalEffects.push(this.props.monster.regional_effects[i].desc);
      }
      this.setState({
        monsterName: this.props.monsterName,
        name: this.props.monster.name,
        image: this.props.monster.image,
        alignment: this.props.monster.alignment,
        loot: this.props.monster.loot,
        description: this.props.monster.description,
        strength: this.props.monster.strength,
        dexterity: this.props.monster.dexterity,
        constitution: this.props.monster.constitution,
        intelligence: this.props.monster.intelligence,
        wisdom: this.props.monster.wisdom,
        charisma: this.props.monster.charisma,
        strength_save: this.props.monster.strength_save,
        dexterity_save: this.props.monster.dexterity_save,
        constitution_save: this.props.monster.constitution_save,
        intelligence_save: this.props.monster.intelligence_save,
        wisdom_save: this.props.monster.wisdom_save,
        charisma_save: this.props.monster.charisma_save,
        acrobatics: this.props.monster.acrobatics,
        animal_handling: this.props.monster.animal_handling,
        arcana: this.props.monster.arcana,
        athletics: this.props.monster.athletics,
        deception: this.props.monster.deception,
        history: this.props.monster.history,
        insight: this.props.monster.insight,
        intimidation: this.props.monster.intimidation,
        investigation: this.props.monster.investigation,
        medicine: this.props.monster.medicine,
        nature: this.props.monster.nature,
        perception: this.props.monster.perception,
        performance: this.props.monster.performance,
        persuasion: this.props.monster.persuasion,
        religion: this.props.monster.religion,
        sleight_of_hand: this.props.monster.sleight_of_hand,
        stealth: this.props.monster.stealth,
        survival: this.props.monster.survival,
        armor_class: this.props.monster.armor_class,
        speed: this.props.monster.speed,
        hit_points: this.props.monster.hit_points,
        hit_dice: this.props.monster.hit_dice,
        actions: this.props.monster.actions,
        legendary_actions: this.props.monster.legendary_actions,
        special_abilities: this.props.monster.special_abilities,
        regional_effects: this.props.monster.regional_effects,
        lair_actions: this.props.monster.lair_actions,
        spells: this.props.monster.spells,
        action_names: newActionNames,
        action_descs: newActionDescs,

        spell_names: newSpellNames,
        spell_casting_times: newSpellCastingTimes,
        spell_ranges: newSpellRanges,
        spell_durations: newSpellDurations,
        spell_descriptions: newSpellDescriptions,
        spell_levels: newSpellLevels,
        spell_schools: newSpellSchools,
        spell_components: newSpellComponents,
        legendary_action_names: newLegendaryActionNames,
        special_ability_names: newSpecialAbilityNames,
        special_ability_descs: newSpecialAbilityDescriptions,
        legendary_action_descs: newLegendaryActionDescriptions,
        regional_effect_descs: newRegionalEffects,
        lair_action_descs: newLairActions,
        spellcasting_ability: this.props.monster.spellcasting_ability,
        spell_save_dc: this.props.monster.spell_save_dc,
        spell_attack_bonus: this.props.monster.spell_attack_bonus,
        damage_vulnerabilities: this.props.monster.damage_vulnerabilities,
        damage_resistances: this.props.monster.damage_resistances,
        damage_immunities: this.props.monster.damage_immunities,
        condition_immunities: this.props.monster.condition_immunities,
        challenge_rating: this.props.monster.challenge_rating,
        size: this.props.monster.size,
        type: this.props.monster.type,
        subtype: this.props.monster.subtype,
        senses: this.props.monster.senses,
        languages: this.props.monster.languages,
        information: this.props.monster.information,
        first_level_spell_slots: this.props.monster.first_level_spell_slots,
        second_level_spell_slots: this.props.monster.second_level_spell_slots,
        third_level_spell_slots: this.props.monster.third_level_spell_slots,
        fourth_level_spell_slots: this.props.monster.fourth_level_spell_slots,
        fifth_level_spell_slots: this.props.monster.fifth_level_spell_slots,
        sixth_level_spell_slots: this.props.monster.sixth_level_spell_slots,
        seventh_level_spell_slots: this.props.monster.seventh_level_spell_slots,
        eighth_level_spell_slots: this.props.monster.eighth_level_spell_slots,
        ninth_level_spell_slots: this.props.monster.ninth_level_spell_slots
      });
    }
  }

  saveMonsterStats = () => {
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

    this.setState(
      {
        monsterStats: {
          name: this.state.name,
          image: this.state.image,
          monsterName: this.state.monsterName,
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
          loot: this.state.loot,
          first_level_spell_slots: this.state.first_level_spell_slots,
          second_level_spell_slots: this.state.second_level_spell_slots,
          third_level_spell_slots: this.state.third_level_spell_slots,
          fourth_level_spell_slots: this.state.fourth_level_spell_slots,
          fifth_level_spell_slots: this.state.fifth_level_spell_slots,
          sixth_level_spell_slots: this.state.sixth_level_spell_slots,
          seventh_level_spell_slots: this.state.seventh_level_spell_slots,
          eighth_level_spell_slots: this.state.eighth_level_spell_slots,
          ninth_level_spell_slots: this.state.ninth_level_spell_slots,
          description: this.state.description
        }
      },
      () => {
        this.props.changeMonster(
          this.props.monsterIndex,
          this.state.monsterStats
        );
      }
    );
  };

  addAction = () => {
    const oldActionNames = this.state.action_names;
    oldActionNames.push("");
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.push("");

    this.setState(
      {
        action_names: oldActionNames,
        action_descs: oldActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  removeAction = index => {
    const oldActionNames = this.state.action_names;
    oldActionNames.splice(index, 1);
    const oldActionDescriptions = this.state.action_descs;
    oldActionDescriptions.splice(index, 1);

    this.setState(
      {
        action_names: oldActionNames,
        action_descs: oldActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  addLegendaryAction = () => {
    const oldLegendaryActionNames = this.state.legendary_action_names;
    oldLegendaryActionNames.push("");
    const oldLegendaryActionDescriptions = this.state.legendary_action_descs;
    oldLegendaryActionDescriptions.push("");

    this.setState(
      {
        legendary_action_names: oldLegendaryActionNames,
        legendary_action_descs: oldLegendaryActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  removeLegendaryAction = index => {
    const oldLegendaryActionNames = this.state.legendary_action_names;
    oldLegendaryActionNames.splice(index, 1);
    const oldLegendaryActionDescriptions = this.state.legendary_action_descs;
    oldLegendaryActionDescriptions.splice(index, 1);

    this.setState(
      {
        legendary_action_names: oldLegendaryActionNames,
        legendary_action_descs: oldLegendaryActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  addSpecialAbility = () => {
    const oldSpecialAbilityNames = this.state.special_ability_names;
    oldSpecialAbilityNames.push("");
    const oldSpecialAbilityDescriptions = this.state.special_ability_descs;
    oldSpecialAbilityDescriptions.push("");

    this.setState(
      {
        special_ability_names: oldSpecialAbilityNames,
        special_ability_descs: oldSpecialAbilityDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  removeSpecialAbility = index => {
    const oldSpecialAbilityNames = this.state.special_ability_names;
    oldSpecialAbilityNames.splice(index, 1);
    const oldSpecialAbilityDescriptions = this.state.special_ability_descs;
    oldSpecialAbilityDescriptions.splice(index, 1);

    this.setState(
      {
        special_ability_names: oldSpecialAbilityNames,
        special_ability_descs: oldSpecialAbilityDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  addLairAction = () => {
    const oldLairActionDescriptions = this.state.lair_action_descs;
    oldLairActionDescriptions.push("");

    this.setState(
      {
        lair_action_descs: oldLairActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  removeLairAction = index => {
    const oldLairActionDescriptions = this.state.lair_action_descs;
    oldLairActionDescriptions.splice(index, 1);

    this.setState(
      {
        lair_action_descs: oldLairActionDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  addRegionalEffect = () => {
    const oldRegionalEffectDescriptions = this.state.regional_effect_descs;
    oldRegionalEffectDescriptions.push("");
    this.setState(
      {
        regional_effect_descs: oldRegionalEffectDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  removeRegionalEffect = index => {
    const oldRegionalEffectDescriptions = this.state.regional_effect_descs;
    oldRegionalEffectDescriptions.splice(index, 1);

    this.setState(
      {
        regional_effect_descs: oldRegionalEffectDescriptions
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  minimizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMinimized";
    this.setState({ spellsShow: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  maximizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMaximized";
    this.setState({ spellsShow: oldState }, () => {
      this.saveMonsterStats();
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

    this.setState(
      {
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
      },
      () => {
        this.saveMonsterStats();
      }
    );
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

    this.setState(
      {
        spell_names: oldSpellNames,
        spell_casting_times: oldSpellCastingTimes,
        spell_descriptions: oldSpellDescriptions,
        spell_durations: oldSpellDurations,
        spell_ranges: oldSpellRanges,
        spell_levels: oldSpellLevels,
        spell_schools: oldSpellSchools,
        spell_components: oldSpellComponents,
        spellsShow: oldSpellsShow
      },
      () => {
        this.saveMonsterStats();
      }
    );
  };

  changeActionName = (index, e) => {
    let oldState = this.state.action_names;
    oldState[index] = e.target.value;
    this.setState({ action_names: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeActionDescription = (index, e) => {
    let oldState = this.state.action_descs;
    oldState[index] = e.target.value;
    this.setState({ action_descs: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeLegendaryActionName = (index, e) => {
    let oldState = this.state.legendary_action_names;
    oldState[index] = e.target.value;
    this.setState({ legendary_action_names: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeLegendaryActionDescription = (index, e) => {
    let oldState = this.state.legendary_action_descs;
    oldState[index] = e.target.value;
    this.setState({ legendary_action_descs: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpecialAbilityName = (index, e) => {
    let oldState = this.state.special_ability_names;
    oldState[index] = e.target.value;
    this.setState({ special_ability_names: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpecialAbilityDescription = (index, e) => {
    let oldState = this.state.special_ability_descs;
    oldState[index] = e.target.value;
    this.setState({ special_ability_descs: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeLairActionDescription = (index, e) => {
    let oldState = this.state.lair_action_descs;
    oldState[index] = e.target.value;
    this.setState({ lair_action_descs: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeRegionalEffectDescription = (index, e) => {
    let oldState = this.state.regional_effect_descs;
    oldState[index] = e.target.value;
    this.setState({ regional_effect_descs: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellName = (index, e) => {
    let oldState = this.state.spell_names;
    oldState[index] = e.target.value;
    this.setState({ spell_names: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellCastingTime = (index, e) => {
    let oldState = this.state.spell_casting_times;
    oldState[index] = e.target.value;
    this.setState({ spell_casting_times: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellDescription = (index, e) => {
    let oldState = this.state.spell_descriptions;
    oldState[index] = e.target.value;
    this.setState({ spell_descriptions: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellDuration = (index, e) => {
    let oldState = this.state.spell_durations;
    oldState[index] = e.target.value;
    this.setState({ spell_durations: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellRange = (index, e) => {
    let oldState = this.state.spell_ranges;
    oldState[index] = e.target.value;
    this.setState({ spell_ranges: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellLevel = (index, e) => {
    let oldState = this.state.spell_levels;
    oldState[index] = e.target.value;
    this.setState({ spell_levels: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellSchool = (index, e) => {
    let oldState = this.state.spell_schools;
    oldState[index] = e.target.value;
    this.setState({ spell_schools: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  changeSpellComponent = (index, e) => {
    let oldState = this.state.spell_components;
    oldState[index] = e.target.value;
    this.setState({ spell_components: oldState }, () => {
      this.saveMonsterStats();
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.saveMonsterStats();
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

  maximize = () => {
    this.props.showSection("monster", this.props.monsterIndex);
  };

  minimize = () => {
    this.props.hideSection("monster", this.props.monsterIndex);
  };

  onClick = e => {
    e.preventDefault();
    this.props.removeMonster(this.props.monsterIndex);
  };

  changeCondition = name => {
    let conditionClicked = name + "Clicked";
    let newConditionClicked;
    if (this.state[conditionClicked] === "ConditionClicked") {
      newConditionClicked = "ConditionUnclicked";
    } else {
      newConditionClicked = "ConditionClicked";
    }
    this.setState(
      { [name]: !this.state[name], [conditionClicked]: newConditionClicked },
      () => {
        this.saveCharacterStats();
      }
    );
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
        }
      );
    };
    if (file !== undefined) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsDataURL(this.state.file);
    }
  };

  render() {
    const { image } = this.state;
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
        <div className="EditCharacterAddSpellCastingTimeText">Casting Time</div>
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

    let blinded;
    let charmed;
    let deafened;
    let frightened;
    let exhaustion;
    let exhaustionLevels;
    let grappled;
    let incapacitated;
    let invisible;
    let paralyzed;
    let petrified;
    let poisoned;
    let prone;
    let restrained;
    let stunned;
    let unconscious;

    if (this.state.blinded === true) {
      blinded = (
        <img
          className="CharacterConditionIcon"
          src={BlindedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      blinded = (
        <img
          className="CharacterConditionIcon"
          src={Blinded}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.charmed === true) {
      charmed = (
        <img
          className="CharacterConditionIcon"
          src={CharmedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      charmed = (
        <img
          className="CharacterConditionIcon"
          src={Charmed}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.deafened === true) {
      deafened = (
        <img
          className="CharacterConditionIcon"
          src={DeafenedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      deafened = (
        <img
          className="CharacterConditionIcon"
          src={Deafened}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.frightened === true) {
      frightened = (
        <img
          className="CharacterConditionIcon"
          src={FrightenedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      frightened = (
        <img
          className="CharacterConditionIcon"
          src={Frightened}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.exhaustion === true) {
      exhaustion = (
        <img
          className="CharacterConditionIcon"
          src={ExhaustionWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
      exhaustionLevels = (
        <img
          className="ConditionIcon"
          src={ExhaustionEffectsWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      exhaustion = (
        <img
          className="CharacterConditionIcon"
          src={Exhaustion}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
      exhaustionLevels = (
        <img
          className="ConditionIcon"
          src={ExhaustionEffects}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.grappled === true) {
      grappled = (
        <img
          className="CharacterConditionIcon"
          src={GrappledWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      grappled = (
        <img
          className="CharacterConditionIcon"
          src={Grappled}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.incapacitated === true) {
      incapacitated = (
        <img
          className="CharacterConditionIcon"
          src={IncapacitatedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      incapacitated = (
        <img
          className="CharacterConditionIcon"
          src={Incapacitated}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.invisible === true) {
      invisible = (
        <img
          className="CharacterConditionIcon"
          src={InvisibleWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      invisible = (
        <img
          className="CharacterConditionIcon"
          src={Invisible}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.paralyzed === true) {
      paralyzed = (
        <img
          className="CharacterConditionIcon"
          src={ParalyzedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      paralyzed = (
        <img
          className="CharacterConditionIcon"
          src={Paralyzed}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.petrified === true) {
      petrified = (
        <img
          className="CharacterConditionIcon"
          src={PetrifiedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      petrified = (
        <img
          className="CharacterConditionIcon"
          src={Petrified}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.poisoned === true) {
      poisoned = (
        <img
          className="CharacterConditionIcon"
          src={PoisonedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      poisoned = (
        <img
          className="CharacterConditionIcon"
          src={Poisoned}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.prone === true) {
      prone = (
        <img
          className="CharacterConditionIcon"
          src={ProneWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      prone = (
        <img
          className="CharacterConditionIcon"
          src={Prone}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.restrained === true) {
      restrained = (
        <img
          className="CharacterConditionIcon"
          src={RestrainedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      restrained = (
        <img
          className="CharacterConditionIcon"
          src={Restrained}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.stunned === true) {
      stunned = (
        <img
          className="CharacterConditionIcon"
          src={StunnedWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      stunned = (
        <img
          className="CharacterConditionIcon"
          src={Stunned}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }
    if (this.state.unconscious === true) {
      unconscious = (
        <img
          className="CharacterConditionIcon"
          src={UnconsciousWhite}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    } else {
      unconscious = (
        <img
          className="CharacterConditionIcon"
          src={Unconscious}
          alt={<i className="fas fa-eye-slash" />}
        />
      );
    }

    if (this.props.encounterCharacterSize === "EncounterCharacterStats") {
      return (
        <div className="EncounterCharacterStats">
          <div className="ImageFill">
            <button
              className="EncounterMaximizeMonsterButton MonsterColor"
              onClick={this.maximize}
            >
              <div className="CenteredImage">
                <i className="fa fa-window-maximize" aria-hidden="true" />
              </div>
            </button>
            <img src={Page} className="EncounterCharacterStatsImage" alt="" />
            <div className="EncounterCharacterImage">{imagePreview}</div>

            <div className="EncounterCharacterNameAndClassAndLevel MonsterColor">
              {this.state.monsterName}
            </div>
            <div className="EncounterCharacterHP MonsterColor">
              <div className="EncounterCharacterHPText">HP</div>
              <input
                maxLength="100"
                className="EncounterCharacterHPInput"
                type="text"
                name="hit_points"
                value={this.state.hit_points}
                onChange={this.onChange}
              />
            </div>
            <div className="EncounterCharacterArmorClass MonsterColor">
              <div className="EncounterCharacterHPText">AC</div>
              <input
                maxLength="100"
                className="EncounterCharacterACInput"
                type="text"
                name="armor_class"
                value={this.state.armor_class}
                onChange={this.onChange}
              />
            </div>
            <div className="EncounterCharacterSpeed MonsterColor">
              <div className="EncounterCharacterSpeedText">Speed</div>
              <input
                maxLength="100"
                className="EncounterCharacterSpeedInput"
                type="text"
                name="speed"
                value={this.state.speed}
                onChange={this.onChange}
              />
            </div>
            <img
              src={RemoveButton}
              className="RemoveButton"
              alt="X"
              onClick={this.onClick}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="DarkOverlayLowZIndex" />
          <div className="RemoveMaximizeHolderSettlementNPC">
            <div className="OrganizationMinimizeButton" onClick={this.minimize}>
              <div className="CenteredPlusNoColor">
                <i className="fas fa-window-minimize" />
              </div>
            </div>
            <div className="RemoveBuilding" onClick={this.onClick}>
              <div className="CenteredPlusNoColor">X</div>
            </div>
          </div>
          <div className="BookHolder">
            <img src={Book} alt="" className="ImageFill" />
          </div>
          <div className="EditCharacterName ">
            <div className="EditCharacterText">Name</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterClassAndLevel ">
            <div className="EditCharacterText">Type</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterBackground ">
            <div className="EditCharacterText">Subtype</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="subtype"
              value={this.state.subtype}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterChallengeRating ">
            <div className="EditChallengeRatingText">Challenge Rating</div>
            <input
              maxLength="100"
              className="EditChallengeRatingInput"
              name="challenge_rating"
              value={this.state.challenge_rating}
              type="number"
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterRace ">
            <div className="EditCharacterText">Size</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="size"
              value={this.state.size}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterAlignment ">
            <div className="EditCharacterText">Alignment</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="alignment"
              value={this.state.alignment}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterHitPoints ">
            <div className="EditCharacterSquareText">Hit Points</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="hit_points"
              value={this.state.hit_points}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterHitDice ">
            <div className="EditCharacterSquareText">Hit Dice</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="hit_dice"
              value={this.state.hit_dice}
              type="text"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterArmorClass ">
            <div className="EditCharacterSquareText">Armor Class</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="armor_class"
              value={this.state.armor_class}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterSpeed ">
            <div className="EditCharacterSquareText">Speed</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="speed"
              value={this.state.speed}
              type="number"
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterStrengthSave ">
            <div className="EditCharacterSquareText">Strength Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="strength_save"
              value={this.state.strength_save}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterDexteritySave ">
            <div className="EditCharacterSquareText">Dexterity Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="dexterity_save"
              value={this.state.dexterity_save}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterConstitutionSave ">
            <div className="EditCharacterSquareText">Constitution Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="constitution_save"
              value={this.state.constitution_save}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterIntelligenceSave ">
            <div className="EditCharacterSquareText">Intelligence Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="intelligence_save"
              value={this.state.intelligence_save}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterWisdomSave ">
            <div className="EditCharacterSquareText">Wisdom Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="wisdom_save"
              value={this.state.wisdom_save}
              type="number"
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterCharismaSave ">
            <div className="EditCharacterSquareText">Charisma Save</div>
            <input
              maxLength="100"
              className="EditCharacterSquareInput"
              name="charisma_save"
              value={this.state.charisma_save}
              type="number"
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterStrengthDisplay ">
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
                maxLength="100"
                className="ModifierText"
                name="dexterity"
                value={this.state.dexterity}
                type="number"
                onChange={this.onChange}
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
                maxLength="100"
                className="ModifierText"
                name="constitution"
                value={this.state.constitution}
                type="number"
                onChange={this.onChange}
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
                maxLength="100"
                className="ModifierText"
                name="intelligence"
                value={this.state.intelligence}
                type="number"
                onChange={this.onChange}
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
                maxLength="100"
                className="ModifierText"
                name="wisdom"
                value={this.state.wisdom}
                type="number"
                onChange={this.onChange}
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
                maxLength="100"
                className="ModifierText"
                name="charisma"
                value={this.state.charisma}
                type="number"
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="EditCharacterOtherProficienciesAndLanguages ">
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

          <div className="EditMonsterLanguages ">
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

          <div className="EditCharacterDamageVulnerabilities ">
            <div className="EditCharacterText">Damage Vulnerabilities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_vulnerabilities"
              value={this.state.damage_vulnerabilities}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterDamageResistances ">
            <div className="EditCharacterText">Damage Resistances</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_resistances"
              value={this.state.damage_resistances}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterDamageImmunities ">
            <div className="EditCharacterText">Damage Immunities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="damage_immunities"
              value={this.state.damage_immunities}
              onChange={this.onChange}
            />
          </div>
          <div className="EditCharacterConditionImmunities ">
            <div className="EditCharacterText">Condition Immunities</div>
            <input
              maxLength="1000"
              className="EditCharacterInput"
              name="condition_immunities"
              value={this.state.condition_immunities}
              onChange={this.onChange}
            />
          </div>

          <div className="EditCharacterMiscHolder  ">
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

              <div className="EditMonsterImageDescription ">
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
              <div className="EditCharacterBackstoryText ">
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
              <div className="EditCharacterBackstoryText ">
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

          <div className="EditCharacterConditionHolder">
            <div
              className={`EditCharacterCondition ${this.state.blindedClicked}`}
              onClick={() => this.changeCondition("blinded")}
            >
              {blinded}
            </div>
            <div
              className={`EditCharacterCondition ${this.state.charmedClicked}`}
              onClick={() => this.changeCondition("charmed")}
            >
              {charmed}
            </div>
            <div
              className={`EditCharacterCondition ${this.state.deafenedClicked}`}
              onClick={() => this.changeCondition("deafened")}
            >
              {deafened}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.frightenedClicked
              }`}
              onClick={() => this.changeCondition("frightened")}
            >
              {frightened}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.exhaustionClicked
              }`}
              onClick={() => this.changeCondition("exhaustion")}
            >
              {exhaustion}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.exhaustionClicked
              }`}
            >
              {exhaustionLevels}
              <input
                maxLength="100"
                name="exhaustion_levels"
                onChange={this.onChange}
                className="EditCharacterConditionInput"
              />
            </div>

            <div
              className={`EditCharacterCondition ${this.state.grappledClicked}`}
              onClick={() => this.changeCondition("grappled")}
            >
              {grappled}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.incapacitatedClicked
              }`}
              onClick={() => this.changeCondition("incapacitated")}
            >
              {incapacitated}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.invisibleClicked
              }`}
              onClick={() => this.changeCondition("invisible")}
            >
              {invisible}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.paralyzedClicked
              }`}
              onClick={() => this.changeCondition("paralyzed")}
            >
              {paralyzed}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.petrifiedClicked
              }`}
              onClick={() => this.changeCondition("petrified")}
            >
              {petrified}
            </div>
            <div
              className={`EditCharacterCondition ${this.state.poisonedClicked}`}
              onClick={() => this.changeCondition("poisoned")}
            >
              {poisoned}
            </div>
            <div
              className={`EditCharacterCondition ${this.state.proneClicked}`}
              onClick={() => this.changeCondition("prone")}
            >
              {prone}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.restrainedClicked
              }`}
              onClick={() => this.changeCondition("restrained")}
            >
              {restrained}
            </div>
            <div
              className={`EditCharacterCondition ${this.state.stunnedClicked}`}
              onClick={() => this.changeCondition("stunned")}
            >
              {stunned}
            </div>
            <div
              className={`EditCharacterCondition ${
                this.state.unconsciousClicked
              }`}
              onClick={() => this.changeCondition("unconscious")}
            >
              {unconscious}
            </div>
          </div>

          <div className="EditCharacterCombatHolder ">
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
              <div className="EditCharacterSpellcastingAbility ">
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
              <div className="EditCharacterSpellSaveDC ">
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
              <div className="EditCharacterSpellAttackBonus ">
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
          <div className="EditMonsterSkills ">
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
                />
              </div>
            </div>
          </div>

          <div className="EditCharacterSpecialAbilitiesHolder  ">
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
        </div>
      );
    }
  }
}

IndividualMonster.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(withRouter(IndividualMonster));
