import React, { Component } from "react";
import Book from "../../../images/book_dmkit_cropped.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SettlementNPC extends Component {
  state = {
    changed: false,
    npcIndex: this.props.npcIndex,
    _id: this.props.NPC._id,
    npcStats: {},
    name: this.props.NPC.name,
    class_and_level: this.props.NPC.class_and_level,
    image: this.props.NPC.image,
    alignment: this.props.NPC.alignment,
    initiative: this.props.NPC.initiative,
    challenge_rating: this.props.NPC.challenge_rating,
    background: this.props.NPC.background,
    factions: this.props.NPC.factions,
    race: this.props.NPC.race,
    inspiration: this.props.NPC.inspiration,
    proficiency_bonus: this.props.NPC.proficiency_bonus,
    passive_perception: this.props.NPC.passive_perception,
    other_proficiencies_and_languages: this.props.NPC
      .other_proficiencies_and_languages,
    equipment: this.props.NPC.equipment,
    description: this.props.NPC.description,
    information: this.props.NPC.information,
    behavior: this.props.NPC.behavior,
    spellcasting_ability: this.props.NPC.spellcasting_ability,
    spell_save_dc: this.props.NPC.spell_save_dc,
    spell_attack_bonus: this.props.NPC.spell_attack_bonus,
    features_and_traits: this.props.NPC.features_and_traits,
    features_and_traits_names: [],
    features_and_traits_descriptions: [],
    strength: this.props.NPC.strength,
    dexterity: this.props.NPC.dexterity,
    constitution: this.props.NPC.constitution,
    intelligence: this.props.NPC.intelligence,
    wisdom: this.props.NPC.wisdom,
    charisma: this.props.NPC.charisma,
    strength_save: this.props.NPC.strength_save,
    dexterity_save: this.props.NPC.dexterity_save,
    constitution_save: this.props.NPC.constitution_save,
    intelligence_save: this.props.NPC.intelligence_save,
    wisdom_save: this.props.NPC.wisdom_save,
    charisma_save: this.props.NPC.charisma_save,
    acrobatics: this.props.NPC.acrobatics,
    animal_handling: this.props.NPC.animal_handling,
    arcana: this.props.NPC.arcana,
    athletics: this.props.NPC.athletics,
    deception: this.props.NPC.deception,
    history: this.props.NPC.history,
    insight: this.props.NPC.insight,
    intimidation: this.props.NPC.intimidation,
    investigation: this.props.NPC.investigation,
    medicine: this.props.NPC.medicine,
    nature: this.props.NPC.nature,
    perception: this.props.NPC.perception,
    performance: this.props.NPC.performance,
    persuasion: this.props.NPC.persuasion,
    religion: this.props.NPC.religion,
    sleight_of_hand: this.props.NPC.sleight_of_hand,
    stealth: this.props.NPC.stealth,
    survival: this.props.NPC.survival,
    acrobatics_proficiency: this.props.NPC.acrobatics_proficiency,
    animal_handling_proficiency: this.props.NPC.animal_handling_proficiency,
    arcana_proficiency: this.props.NPC.arcana_proficiency,
    athletics_proficiency: this.props.NPC.athletics_proficiency,
    deception_proficiency: this.props.NPC.deception_proficiency,
    history_proficiency: this.props.NPC.history_proficiency,
    insight_proficiency: this.props.NPC.insight_proficiency,
    intimidation_proficiency: this.props.NPC.intimidation_proficiency,
    investigation_proficiency: this.props.NPC.investigation_proficiency,
    medicine_proficiency: this.props.NPC.medicine_proficiency,
    nature_proficiency: this.props.NPC.nature_proficiency,
    perception_proficiency: this.props.NPC.perception_proficiency,
    performance_proficiency: this.props.NPC.performance_proficiency,
    persuasion_proficiency: this.props.NPC.persuasion_proficiency,
    religion_proficiency: this.props.NPC.religion_proficiency,
    sleight_of_hand_proficiency: this.props.NPC.sleight_of_hand_proficiency,
    stealth_proficiency: this.props.NPC.stealth_proficiency,
    survival_proficiency: this.props.NPC.survival_proficiency,
    armor_class: this.props.NPC.armor_class,
    speed: this.props.NPC.speed,
    hit_points: this.props.NPC.hit_points,
    hit_dice: this.props.NPC.hit_dice,
    actions: this.props.NPC.actions,
    action_names: [],
    action_descs: [],
    action_attack_bonuses: [],
    action_damage_bonuses: [],
    action_damage_dices: [],
    spells: this.props.NPC.spells,
    spell_names: [],
    spell_casting_times: [],
    spell_ranges: [],
    spell_durations: [],
    spell_descriptions: [],
    spell_levels: [],
    spell_schools: [],
    spell_components: [],
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
    first_level_spell_slots: this.props.NPC.first_level_spell_slots,
    second_level_spell_slots: this.props.NPC.second_level_spell_slots,
    third_level_spell_slots: this.props.NPC.third_level_spell_slots,
    fourth_level_spell_slots: this.props.NPC.fourth_level_spell_slots,
    fifth_level_spell_slots: this.props.NPC.fifth_level_spell_slots,
    sixth_level_spell_slots: this.props.NPC.sixth_level_spell_slots,
    seventh_level_spell_slots: this.props.NPC.seventh_level_spell_slots,
    eighth_level_spell_slots: this.props.NPC.eighth_level_spell_slots,
    ninth_level_spell_slots: this.props.NPC.ninth_level_spell_slots,
    copper: this.props.NPC.copper,
    silver: this.props.NPC.silver,
    gold: this.props.NPC.gold,
    electrum: this.props.NPC.electrum,
    platinum: this.props.NPC.platinum,
    showCharacterActions: "ShowCombatHolder",
    characterActions: "CharacterClicked",
    characterSpells: "CharacterUnclicked",
    characterFeatures: "CharacterUnclicked",
    characterAppearance: "CharacterClicked",
    characterQualities: "CharacterUnclicked",
    characterBackstory: "CharacterUnclicked",
    showCharacterSpells: "HideCharacterSection",
    showCharacterFeatures: "HideCharacterSection",
    showCharacterAppearance: "ShowCharacterSection",
    showCharacterQualities: "HideCharacterSection",
    showCharacterBackstory: "HideCharacterSection",
    backstory: this.props.NPC.backstory,
    age: this.props.NPC.age,
    height: this.props.NPC.height,
    weight: this.props.NPC.weight,
    eyes: this.props.NPC.eyes,
    skin: this.props.NPC.skin,
    hair: this.props.NPC.hair,
    damage_vulnerabilities: this.props.NPC.damage_vulnerabilities,
    damage_resistances: this.props.NPC.damage_resistances,
    damage_immunities: this.props.NPC.damage_immunities,
    condition_immunities: this.props.NPC.condition_immunities,
    maximized: false,
    size: "SettlementNPCDisplay",
    file: "",
    settlement_npcs: []
  };

  componentDidMount = () => {
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
      oldNames[i] = this.props.NPC.spells[i].name;
      this.setState({ spell_names: oldNames });

      let oldDescs = this.state.spell_descriptions;
      oldDescs[i] = this.props.NPC.spells[i].desc;
      this.setState({ spell_descriptions: oldDescs });

      let oldSpellcastingTimes = this.state.spell_casting_times;
      oldSpellcastingTimes[i] = this.props.NPC.spells[i].casting_time;
      this.setState({ spell_casting_times: oldSpellcastingTimes });

      let oldSpellDurations = this.state.spell_durations;
      oldSpellDurations[i] = this.props.NPC.spells[i].duration;
      this.setState({ spell_durations: oldSpellDurations });

      let oldSpellLevels = this.state.spell_levels;
      oldSpellLevels[i] = this.props.NPC.spells[i].level;
      this.setState({ spell_levels: oldSpellLevels });

      let oldSpellRanges = this.state.spell_ranges;
      oldSpellRanges[i] = this.props.NPC.spells[i].range;
      this.setState({ spell_ranges: oldSpellRanges });

      let oldSpellSchools = this.state.spell_schools;
      oldSpellSchools[i] = this.props.NPC.spells[i].school;
      this.setState({ spell_schools: oldSpellSchools });

      let oldSpellComponents = this.state.spell_components;
      oldSpellComponents[i] = this.props.NPC.spells[i].components;
      this.setState({ spell_components: oldSpellComponents });

      let oldSpellsShow = this.state.spellsShow;
      oldSpellsShow[i] = "EditCharacterSpellMinimized";
      this.setState({ spellsShow: oldSpellsShow });
    }

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
      skillProficiencies[i].checked = false;
    }
  };

  saveNPCStats = () => {
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
        school: this.state.spell_schools[i],
        casting_time: this.state.spell_casting_times[i],
        range: this.state.spell_ranges[i],
        components: this.state.spell_components[i],
        duration: this.state.spell_durations[i],
        desc: this.state.spell_descriptions[i]
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
    this.setState(
      {
        npcStats: {
          name: this.state.name,
          image: this.state.image,
          class_and_level: this.state.class_and_level,
          alignment: this.state.alignment,
          challenge_rating: this.state.challenge_rating,
          background: this.state.background,
          factions: this.state.factions,
          initiative: this.state.initiative,
          race: this.state.race,
          inspiration: this.state.inspiration,
          proficiency_bonus: this.state.proficiency_bonus,
          passive_perception: this.state.passive_perception,
          other_proficiencies_and_languages: this.state
            .other_proficiencies_and_languages,
          equipment: this.state.equipment,
          description: this.state.description,
          information: this.state.information,
          behavior: this.state.behavior,
          spellcasting_ability: this.state.spellcasting_ability,
          spell_save_dc: this.state.spell_save_dc,
          spell_attack_bonus: this.state.spell_attack_bonus,
          features_and_traits: featuresArray,
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
          copper: this.state.copper,
          silver: this.state.silver,
          gold: this.state.gold,
          electrum: this.state.electrum,
          platinum: this.state.platinum,
          backstory: this.state.backstory,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight,
          eyes: this.state.eyes,
          skin: this.state.skin,
          hair: this.state.hair,
          armor_class: this.state.armor_class,
          speed: this.state.speed,
          hit_points: this.state.hit_points,
          hit_dice: this.state.hit_dice,
          actions: actionsArray,
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
          damage_vulnerabilities: this.state.damage_vulnerabilities,
          damage_resistances: this.state.damage_resistances,
          damage_immunities: this.state.damage_immunities,
          condition_immunities: this.state.condition_immunities,
          _id: this.state._id
        }
      },
      () => {
        this.props.changeNPC(this.props.npcIndex, this.state.npcStats);
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.NPC !== prevProps.NPC && this.props.NPC !== undefined) {
      let newActionNames = [];
      let newActionDescs = [];
      let newActionAttackBonuses = [];
      let newActionDamageDice = [];
      let newActionDamageBonuses = [];
      for (let i = 0; i < this.props.NPC.actions.length; i++) {
        newActionNames.push(this.props.NPC.actions[i].name);
        newActionDescs.push(this.props.NPC.actions[i].desc);
        newActionAttackBonuses.push(this.props.NPC.actions[i].attack_bonus);
        newActionDamageDice.push(this.props.NPC.actions[i].damage_dice);
        newActionDamageBonuses.push(this.props.NPC.actions[i].damage_bonus);
      }

      let newSpellNames = [];
      let newSpellLevels = [];
      let newSpellSchools = [];
      let newSpellCastingTimes = [];
      let newSpellRanges = [];
      let newSpellComponents = [];
      let newSpellDurations = [];
      let newSpellDescriptions = [];
      for (let i = 0; i < this.props.NPC.spells.length; i++) {
        newSpellNames.push(this.props.NPC.spells[i].name);
        newSpellLevels.push(this.props.NPC.spells[i].level);
        newSpellSchools.push(this.props.NPC.spells[i].school);
        newSpellCastingTimes.push(this.props.NPC.spells[i].casting_time);
        newSpellRanges.push(this.props.NPC.spells[i].range);
        newSpellComponents.push(this.props.NPC.spells[i].components);
        newSpellDurations.push(this.props.NPC.spells[i].duration);
        newSpellDescriptions.push(this.props.NPC.spells[i].desc);
      }

      let newFeatureNames = [];
      let newFeatureDescriptions = [];

      for (let i = 0; i < this.props.NPC.features_and_traits.length; i++) {
        newFeatureNames.push(this.props.NPC.features_and_traits[i].name);
        newFeatureDescriptions.push(
          this.props.NPC.features_and_traits[i].description
        );
      }
      this.setState({
        name: this.props.NPC.name,
        image: this.props.NPC.image,
        alignment: this.props.NPC.alignment,
        initiative: this.props.NPC.initiative,
        class_and_level: this.props.NPC.class_and_level,
        challenge_rating: this.props.NPC.challenge_rating,
        background: this.props.NPC.background,
        factions: this.props.NPC.factions,
        race: this.props.NPC.race,
        inspiration: this.props.NPC.inspiration,
        proficiency_bonus: this.props.NPC.proficiency_bonus,
        passive_perception: this.props.NPC.passive_perception,
        other_proficiencies_and_languages: this.props.NPC
          .other_proficiencies_and_languages,
        equipment: this.props.NPC.equipment,
        description: this.props.NPC.description,
        information: this.props.NPC.information,
        behavior: this.props.NPC.behavior,
        spellcasting_ability: this.props.NPC.spellcasting_ability,
        spell_save_dc: this.props.NPC.spell_save_dc,
        spell_attack_bonus: this.props.NPC.spell_attack_bonus,
        action_names: newActionNames,
        action_descs: newActionDescs,
        action_attack_bonuses: newActionAttackBonuses,
        action_damage_bonuses: newActionDamageBonuses,
        action_damage_dices: newActionDamageDice,
        spell_names: newSpellNames,
        spell_casting_times: newSpellCastingTimes,
        spell_ranges: newSpellRanges,
        spell_durations: newSpellDurations,
        spell_descriptions: newSpellDescriptions,
        spell_levels: newSpellLevels,
        spell_schools: newSpellSchools,
        spell_components: newSpellComponents,
        first_level_spell_slots: this.props.NPC.first_level_spell_slots,
        second_level_spell_slots: this.props.NPC.second_level_spell_slots,
        third_level_spell_slots: this.props.NPC.third_level_spell_slots,
        fourth_level_spell_slots: this.props.NPC.fourth_level_spell_slots,
        fifth_level_spell_slots: this.props.NPC.fifth_level_spell_slots,
        sixth_level_spell_slots: this.props.NPC.sixth_level_spell_slots,
        seventh_level_spell_slots: this.props.NPC.seventh_level_spell_slots,
        eighth_level_spell_slots: this.props.NPC.eighth_level_spell_slots,
        ninth_level_spell_slots: this.props.NPC.ninth_level_spell_slots,
        copper: this.props.NPC.copper,
        silver: this.props.NPC.silver,
        gold: this.props.NPC.gold,
        electrum: this.props.NPC.electrum,
        platinum: this.props.NPC.platinum,
        features_and_traits_names: newFeatureNames,
        features_and_traits_descriptions: newFeatureDescriptions,
        strength: this.props.NPC.strength,
        dexterity: this.props.NPC.dexterity,
        constitution: this.props.NPC.constitution,
        intelligence: this.props.NPC.intelligence,
        wisdom: this.props.NPC.wisdom,
        charisma: this.props.NPC.charisma,
        strength_save: this.props.NPC.strength_save,
        dexterity_save: this.props.NPC.dexterity_save,
        constitution_save: this.props.NPC.constitution_save,
        intelligence_save: this.props.NPC.intelligence_save,
        wisdom_save: this.props.NPC.wisdom_save,
        charisma_save: this.props.NPC.charisma_save,
        acrobatics: this.props.NPC.acrobatics,
        animal_handling: this.props.NPC.animal_handling,
        arcana: this.props.NPC.arcana,
        athletics: this.props.NPC.athletics,
        deception: this.props.NPC.deception,
        history: this.props.NPC.history,
        insight: this.props.NPC.insight,
        intimidation: this.props.NPC.intimidation,
        investigation: this.props.NPC.investigation,
        medicine: this.props.NPC.medicine,
        nature: this.props.NPC.nature,
        perception: this.props.NPC.perception,
        performance: this.props.NPC.performance,
        persuasion: this.props.NPC.persuasion,
        religion: this.props.NPC.religion,
        sleight_of_hand: this.props.NPC.sleight_of_hand,
        stealth: this.props.NPC.stealth,
        survival: this.props.NPC.survival,
        acrobatics_proficiency: this.props.NPC.acrobatics_proficiency,
        animal_handling_proficiency: this.props.NPC.animal_handling_proficiency,
        arcana_proficiency: this.props.NPC.arcana_proficiency,
        athletics_proficiency: this.props.NPC.athletics_proficiency,
        deception_proficiency: this.props.NPC.deception_proficiency,
        history_proficiency: this.props.NPC.history_proficiency,
        insight_proficiency: this.props.NPC.insight_proficiency,
        intimidation_proficiency: this.props.NPC.intimidation_proficiency,
        investigation_proficiency: this.props.NPC.investigation_proficiency,
        medicine_proficiency: this.props.NPC.medicine_proficiency,
        nature_proficiency: this.props.NPC.nature_proficiency,
        perception_proficiency: this.props.NPC.perception_proficiency,
        performance_proficiency: this.props.NPC.performance_proficiency,
        persuasion_proficiency: this.props.NPC.persuasion_proficiency,
        religion_proficiency: this.props.NPC.religion_proficiency,
        sleight_of_hand_proficiency: this.props.NPC.sleight_of_hand_proficiency,
        stealth_proficiency: this.props.NPC.stealth_proficiency,
        survival_proficiency: this.props.NPC.survival_proficiency,
        armor_class: this.props.NPC.armor_class,
        speed: this.props.NPC.speed,
        hit_points: this.props.NPC.hit_points,
        hit_dice: this.props.NPC.hit_dice,
        actions: this.props.NPC.actions,
        backstory: this.props.NPC.backstory,
        age: this.props.NPC.age,
        height: this.props.NPC.height,
        weight: this.props.NPC.weight,
        eyes: this.props.NPC.eyes,
        skin: this.props.NPC.skin,
        hair: this.props.NPC.hair,
        spells: this.props.NPC.spells,
        features_and_traits: this.props.NPC.features_and_traits,
        damage_vulnerabilities: this.props.NPC.damage_vulnerabilities,
        damage_resistances: this.props.NPC.damage_resistances,
        damage_immunities: this.props.NPC.damage_immunities,
        condition_immunities: this.props.NPC.condition_immunities,
        _id: this.props.NPC._id
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.saveNPCStats();
    });
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
    this.setState(
      {
        action_names: oldActionNames,
        action_descs: oldActionDescriptions,
        action_attack_bonuses: oldActionAttackBonuses,
        action_damage_dices: oldActionDamageDie,
        action_damage_bonuses: oldActionDamageBonuses
      },
      () => {
        this.saveNPCStats();
      }
    );
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

    this.setState(
      {
        action_names: oldActionNames,
        action_descs: oldActionDescriptions,
        action_attack_bonuses: oldActionAttackBonuses,
        action_damage_dices: oldActionDamageDie,
        action_damage_bonuses: oldActionDamageBonuses
      },
      () => {
        this.saveNPCStats();
      }
    );
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
        this.saveNPCStats();
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
        this.saveNPCStats();
      }
    );
  };

  addFeature = () => {
    const oldFeatureNames = this.state.features_and_traits_names;
    const oldFeatureDescriptions = this.state.features_and_traits_descriptions;
    oldFeatureNames.push("");
    oldFeatureDescriptions.push("");
    this.setState(
      {
        features_and_traits_names: oldFeatureNames,
        features_and_traits_descriptions: oldFeatureDescriptions
      },
      () => {
        this.saveNPCStats();
      }
    );
  };

  removeFeature = index => {
    const oldFeatureNames = this.state.features_and_traits_names;
    const oldFeatureDescriptions = this.state.features_and_traits_descriptions;
    oldFeatureNames.splice(index, 1);
    oldFeatureDescriptions.splice(index, 1);
    this.setState(
      {
        features_and_traits_names: oldFeatureNames,
        features_and_traits_descriptions: oldFeatureDescriptions
      },
      () => {
        this.saveNPCStats();
      }
    );
  };

  changeActionName = (index, e) => {
    let oldState = this.state.action_names;
    oldState[index] = e.target.value;
    this.setState({ action_names: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeActionDescription = (index, e) => {
    let oldState = this.state.action_descs;
    oldState[index] = e.target.value;
    this.setState({ action_descs: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeActionAttackBonus = (index, e) => {
    let oldState = this.state.action_attack_bonuses;
    oldState[index] = e.target.value;
    this.setState({ action_attack_bonuses: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeActionDamageBonus = (index, e) => {
    let oldState = this.state.action_damage_bonuses;
    oldState[index] = e.target.value;
    this.setState({ action_damage_bonuses: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeActionDamageDie = (index, e) => {
    let oldState = this.state.action_damage_dices;
    oldState[index] = e.target.value;
    this.setState({ action_damage_dices: oldState }, () => {
      this.saveNPCStats();
    });
  };

  minimizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMinimized";
    this.setState({ spellsShow: oldState }, () => {
      this.saveNPCStats();
    });
  };

  maximizeSpell = (index, e) => {
    let oldState = this.state.spellsShow;
    oldState[index] = "EditCharacterSpellMaximized";
    this.setState({ spellsShow: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellName = (index, e) => {
    let oldState = this.state.spell_names;
    oldState[index] = e.target.value;
    this.setState({ spell_names: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellCastingTime = (index, e) => {
    let oldState = this.state.spell_casting_times;
    oldState[index] = e.target.value;
    this.setState({ spell_casting_times: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellDescription = (index, e) => {
    let oldState = this.state.spell_descriptions;
    oldState[index] = e.target.value;
    this.setState({ spell_descriptions: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellDuration = (index, e) => {
    let oldState = this.state.spell_durations;
    oldState[index] = e.target.value;
    this.setState({ spell_durations: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellRange = (index, e) => {
    let oldState = this.state.spell_ranges;
    oldState[index] = e.target.value;
    this.setState({ spell_ranges: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellLevel = (index, e) => {
    let oldState = this.state.spell_levels;
    oldState[index] = e.target.value;
    this.setState({ spell_levels: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellSchool = (index, e) => {
    let oldState = this.state.spell_schools;
    oldState[index] = e.target.value;
    this.setState({ spell_schools: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeSpellComponent = (index, e) => {
    let oldState = this.state.spell_components;
    oldState[index] = e.target.value;
    this.setState({ spell_components: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeFeatureName = (index, e) => {
    let oldState = this.state.features_and_traits_names;
    oldState[index] = e.target.value;
    this.setState({ features_and_traits_names: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeFeatureDescription = (index, e) => {
    let oldState = this.state.features_and_traits_descriptions;
    oldState[index] = e.target.value;
    this.setState({ features_and_traits_descriptions: oldState }, () => {
      this.saveNPCStats();
    });
  };

  changeProficiency = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] }, () => {
      this.saveNPCStats();
    });
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

  maximize = () => {
    if (this.props.npcValue === "OrganizationMember") {
      this.props.showOrganizationNPC(
        this.props.organizationIndex,
        this.props.npcIndex,
        "member"
      );
    } else if (this.props.npcValue === "OrganizationLeader") {
      this.props.showOrganizationNPC(
        this.props.organizationIndex,
        this.props.npcIndex,
        "leader"
      );
    } else if (this.props.npcValue === "BuildingWorker") {
      this.props.showBuildingNPC(
        this.props.buildingIndex,
        this.props.npcIndex,
        "worker"
      );
    } else if (this.props.npcValue === "BuildingOwner") {
      this.props.showBuildingNPC(
        this.props.buildingIndex,
        this.props.npcIndex,
        "owner"
      );
    } else {
      this.props.showNPC(this.props.npcIndex);
    }
  };

  minimize = () => {
    this.props.hideNPC();
  };

  removeNPC = () => {
    this.props.removeNPC(this.props.npcIndex);
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
    const { image } = this.state;
    const { loading } = this.props.profile;
    if (loading) {
      return <div className="Hidden" />;
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
            <div className="EditCharacterActionNameHolder">
              <input
                maxLength="100"
                className="EditCharacterActionName"
                value={this.state.action_names[i]}
                onChange={this.changeActionName.bind(this, i)}
              />
            </div>
            <div className="EditCharacterActionAttackBonusHolder">
              <input
                maxLength="100"
                className="EditCharacterActionAttackBonus"
                value={this.state.action_attack_bonuses[i]}
                onChange={this.changeActionAttackBonus.bind(this, i)}
              />
            </div>
            <div className="EditCharacterActionDamageDiceHolder">
              <input
                maxLength="100"
                className="EditCharacterActionDamageDice"
                value={this.state.action_damage_dices[i]}
                onChange={this.changeActionDamageDie.bind(this, i)}
              />
            </div>
            <div className="EditCharacterActionDamageBonusHolder">
              <input
                maxLength="100"
                className="EditCharacterActionDamageBonus"
                value={this.state.action_damage_bonuses[i]}
                onChange={this.changeActionDamageBonus.bind(this, i)}
              />
            </div>
            <div className="EditCharacterActionDescriptionHolder">
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
                maxLength="100"
                className="EditCharacterActionName"
                value={this.state.features_and_traits_names[i]}
                onChange={this.changeFeatureName.bind(this, i)}
              />
            </div>
            <div className="EditCharacterFeatureDescriptionHolder">
              <textarea
                maxLength="5000"
                className="EditCharacterActionDescription"
                value={this.state.features_and_traits_descriptions[i]}
                onChange={this.changeFeatureDescription.bind(this, i)}
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

      let removeButton;
      let displayValue;
      if (this.props.npcValue === "NPC") {
        displayValue = "SettlementNPCDisplay";
        removeButton = (
          <div className="RemoveBuilding" onClick={this.removeNPC}>
            <div className="CenteredPlusNoColor">X</div>
          </div>
        );
      } else if (this.props.npcValue === "OrganizationLeader") {
        displayValue = "SettlementOrganizationNPCDisplay";
        removeButton = (
          <div
            className="RemoveBuilding"
            onClick={this.props.removeOrganizationLeader.bind(
              this,
              this.props.npcIndex
            )}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
        );
      } else if (this.props.npcValue === "OrganizationMember") {
        displayValue = "SettlementOrganizationNPCDisplay";
        removeButton = (
          <div
            className="RemoveBuilding"
            onClick={this.props.removeOrganizationMember.bind(
              this,
              this.props.npcIndex
            )}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
        );
      } else if (this.props.npcValue === "BuildingOwner") {
        displayValue = "SettlementBuildingNPCDisplay";
        removeButton = (
          <div
            className="RemoveBuilding"
            onClick={this.props.removeBuildingOwner.bind(
              this,
              this.props.npcIndex
            )}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
        );
      } else if (this.props.npcValue === "BuildingWorker") {
        displayValue = "SettlementBuildingNPCDisplay";
        removeButton = (
          <div
            className="RemoveBuilding"
            onClick={this.props.removeBuildingWorker.bind(
              this,
              this.props.npcIndex
            )}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
        );
      }
      if (this.props.size === "SettlementNPCDisplay") {
        return (
          <div className={displayValue}>
            <div>
              <div className="RemoveMaximizeHolder">
                {removeButton}
                <div
                  className="OrganizationMaximizeButton"
                  onClick={this.maximize}
                >
                  <div className="CenteredPlusNoColor">
                    <i className="fa fa-window-maximize" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="SettlementNPCName ">
                <div className="EditCharacterText">Name</div>
                <input
                  maxLength="100"
                  className="EditCharacterInput"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="SettlementNPCDescription">
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
          </div>
        );
      } else {
        return (
          <div>
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
              <div className="EditCharacterText">Class and Level</div>
              <input
                maxLength="100"
                className="EditCharacterInput"
                name="class_and_level"
                value={this.state.class_and_level}
                onChange={this.onChange}
              />
            </div>
            <div className="EditCharacterBackground ">
              <div className="EditCharacterText">Background</div>
              <input
                maxLength="100"
                className="EditCharacterInput"
                name="background"
                value={this.state.background}
                onChange={this.onChange}
              />
            </div>
            <div className="EditNPCChallengeRating">
              <div className="EditChallengeRatingTextNPC">Challenge Rating</div>
              <input
                maxLength="100"
                className="EditChallengeRatingInput"
                name="challenge_rating"
                value={this.state.challenge_rating}
                type="text"
                onChange={this.onChange}
              />
            </div>

            <div className="EditCharacterProficiencyBonus ">
              <div className="EditCharacterText">Proficiency Bonus</div>
              <input
                maxLength="100"
                className="EditCharacterInput"
                name="proficiency_bonus"
                value={this.state.proficiency_bonus}
                onChange={this.onChange}
              />
            </div>

            <div className="EditCharacterRace ">
              <div className="EditCharacterText">Race</div>
              <input
                maxLength="100"
                className="EditCharacterInput"
                name="race"
                value={this.state.race}
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
            <div className="EditCharacterInitiative ">
              <div className="EditCharacterSquareText">Initiative</div>
              <input
                maxLength="100"
                className="EditCharacterSquareInput"
                name="initiative"
                value={this.state.initiative}
                type="number"
                onChange={this.onChange}
              />
            </div>
            <div className="EditCharacterInspiration ">
              <div className="EditCharacterSquareText">Inspiration</div>
              <input
                maxLength="100"
                className="EditCharacterSquareInput"
                name="inspiration"
                value={this.state.inspiration}
                type="text"
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
                Other Proficiencies And Languages
              </div>
              <textarea
                maxLength="5000"
                className="EditCharacterOtherProficienciesAndLanguagesInput"
                name="other_proficiencies_and_languages"
                value={this.state.other_proficiencies_and_languages}
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
                    maxLength="100"
                    className="EditCharacterInput"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterHeight ">
                  <div className="EditCharacterText">Height</div>
                  <input
                    maxLength="100"
                    className="EditCharacterInput"
                    name="height"
                    value={this.state.height}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterWeight ">
                  <div className="EditCharacterText">Weight</div>
                  <input
                    maxLength="100"
                    className="EditCharacterInput"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterEyes ">
                  <div className="EditCharacterText">Eyes</div>
                  <input
                    maxLength="100"
                    className="EditCharacterInput"
                    name="eyes"
                    value={this.state.eyes}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterSkin ">
                  <div className="EditCharacterText">Skin</div>
                  <input
                    maxLength="100"
                    className="EditCharacterInput"
                    name="skin"
                    value={this.state.skin}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterHair ">
                  <div className="EditCharacterText">Hair</div>
                  <input
                    maxLength="100"
                    className="EditCharacterInput"
                    name="hair"
                    value={this.state.hair}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditCharacterDescription ">
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
                  this.state.characterQualities
                }`}
                onClick={this.viewQualities}
              >
                <div className="BuildingOwnersText">Qualities</div>
              </div>
              <div className={this.state.showCharacterQualities}>
                <div className="EditNPCInformation ">
                  <div className="EditCharacterQualitiesText">Information</div>
                  <textarea
                    maxLength="5000"
                    className="EditCharacterQualitiesInput"
                    name="information"
                    value={this.state.information}
                    onChange={this.onChange}
                  />
                </div>
                <div className="EditNPCBehavior ">
                  <div className="EditCharacterQualitiesText">Behavior</div>
                  <textarea
                    maxLength="5000"
                    className="EditCharacterQualitiesInput"
                    name="behavior"
                    value={this.state.behavior}
                    onChange={this.onChange}
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
                  maxLength="5000"
                  className="EditCharacterBackstoryText"
                  name="backstory"
                  value={this.state.backstory}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="EditCharacterFactions ">
              <div className="EditCharacterOtherProficienciesAndLanguagesText">
                Factions
              </div>
              <textarea
                maxLength="5000"
                className="EditCharacterOtherProficienciesAndLanguagesInput"
                name="factions"
                value={this.state.factions}
                onChange={this.onChange}
              />
            </div>

            <div className="EditCharacterCombatHolder ">
              <div
                className={`EditCharacterActions ${
                  this.state.characterActions
                }`}
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
                  this.state.characterFeatures
                }`}
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
                    checked={this.state.acrobatics_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.animal_handling_proficiency}
                    checked={this.state.animal_handling_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.arcana_proficiency}
                    checked={this.state.arcana_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.athletics_proficiency}
                    checked={this.state.athletics_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.deception_proficiency}
                    checked={this.state.deception_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.history_proficiency}
                    checked={this.state.history_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.insight_proficiency}
                    checked={this.state.insight_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.intimidation_proficiency}
                    checked={this.state.intimidation_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.investigation_proficiency}
                    checked={this.state.investigation_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.medicine_proficiency}
                    checked={this.state.medicine_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.nature_proficiency}
                    checked={this.state.nature_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.perception_proficiency}
                    checked={this.state.perception_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.performance_proficiency}
                    checked={this.state.performance_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.persuasion_proficiency}
                    checked={this.state.persuasion_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.religion_proficiency}
                    checked={this.state.religion_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.sleight_of_hand_proficiency}
                    checked={this.state.sleight_of_hand_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.stealth_proficiency}
                    checked={this.state.stealth_proficiency}
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
                    maxLength="100"
                  />
                </div>
                <div className="EditCharacterSkillHolder">
                  <input
                    type="checkbox"
                    value={this.state.survival_proficiency}
                    checked={this.state.survival_proficiency}
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
                  maxLength="100"
                />
              </div>
              <div className="EditCharacterEquipment">
                <div className="EditCharacterEquipmentText">Equipment</div>
                <textarea
                  maxLength="5000"
                  className="EditCharacterEquipmentInput"
                  name="equipment"
                  value={this.state.equipment}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="RemoveMaximizeHolderSettlementNPC">
              {removeButton}
              <div
                className="OrganizationMinimizeButton"
                onClick={this.minimize}
              >
                <div className="CenteredPlusNoColor">
                  <i className="fa fa-window-minimize" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(withRouter(SettlementNPC));
