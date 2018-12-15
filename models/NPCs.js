const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NPCSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  challenge_rating: {
    type: Number
  },
  background: {
    type: String
  },
  backstory: {
    type: String
  },
  factions: {
    type: String
  },
  race: {
    type: String
  },
  alignment: {
    type: String
  },
  inspiration: {
    type: String
  },
  proficiency_bonus: {
    type: Number
  },
  strength: {
    type: Number
  },
  dexterity: {
    type: Number
  },
  constitution: {
    type: Number
  },
  intelligence: {
    type: Number
  },
  wisdom: {
    type: Number
  },
  charisma: {
    type: Number
  },
  strength_save: {
    type: Number
  },
  dexterity_save: {
    type: Number
  },
  constitution_save: {
    type: Number
  },
  intelligence_save: {
    type: Number
  },
  wisdom_save: {
    type: Number
  },
  charisma_save: {
    type: Number
  },
  acrobatics: {
    type: Number
  },
  animal_handling: {
    type: Number
  },
  arcana: {
    type: Number
  },
  athletics: {
    type: Number
  },
  deception: {
    type: Number
  },
  history: {
    type: Number
  },
  insight: {
    type: Number
  },
  intimidation: {
    type: Number
  },
  investigation: {
    type: Number
  },
  medicine: {
    type: Number
  },
  nature: {
    type: Number
  },
  perception: {
    type: Number
  },
  performance: {
    type: Number
  },
  persuasion: {
    type: Number
  },
  religion: {
    type: Number
  },
  sleight_of_hand: {
    type: Number
  },
  stealth: {
    type: Number
  },
  survival: {
    type: Number
  },
  acrobatics_proficiency: {
    type: Boolean
  },
  animal_handling_proficiency: {
    type: Boolean
  },
  arcana_proficiency: {
    type: Boolean
  },
  athletics_proficiency: {
    type: Boolean
  },
  deception_proficiency: {
    type: Boolean
  },
  history_proficiency: {
    type: Boolean
  },
  insight_proficiency: {
    type: Boolean
  },
  intimidation_proficiency: {
    type: Boolean
  },
  investigation_proficiency: {
    type: Boolean
  },
  medicine_proficiency: {
    type: Boolean
  },
  nature_proficiency: {
    type: Boolean
  },
  perception_proficiency: {
    type: Boolean
  },
  performance_proficiency: {
    type: Boolean
  },
  persuasion_proficiency: {
    type: Boolean
  },
  religion_proficiency: {
    type: Boolean
  },
  sleight_of_hand_proficiency: {
    type: Boolean
  },
  stealth_proficiency: {
    type: Boolean
  },
  survival_proficiency: {
    type: Boolean
  },
  passive_perception: {
    type: Number
  },
  other_proficiencies_and_languages: {
    type: String
  },
  armor_class: {
    type: Number
  },
  class_and_level: {
    type: String
  },
  initiative: {
    type: Number
  },
  speed: {
    type: Number
  },
  hit_points: {
    type: Number
  },
  hit_dice: {
    type: String
  },
  death_successes: {
    type: Number
  },
  death_failures: {
    type: Number
  },
  damage_vulnerabilities: {
    type: String
  },
  damage_resistances: {
    type: String
  },
  damage_immunities: {
    type: String
  },
  condition_immunities: {
    type: String
  },
  actions: [],
  equipment: {
    type: String
  },
  copper: {
    type: String
  },
  silver: {
    type: String
  },
  gold: {
    type: String
  },
  electrum: {
    type: String
  },
  platinum: {
    type: String
  },
  description: {
    type: String
  },
  age: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  eyes: {
    type: String
  },
  skin: {
    type: String
  },
  hair: {
    type: String
  },
  information: {
    type: String
  },
  behavior: {
    type: String
  },
  spellcasting_ability: {
    type: String
  },
  spell_save_dc: {
    type: Number
  },
  spell_attack_bonus: {
    type: Number
  },
  spells: [],
  first_level_spell_slots: {
    type: Number
  },
  second_level_spell_slots: {
    type: Number
  },
  third_level_spell_slots: {
    type: Number
  },
  fourth_level_spell_slots: {
    type: Number
  },
  fifth_level_spell_slots: {
    type: Number
  },
  sixth_level_spell_slots: {
    type: Number
  },
  seventh_level_spell_slots: {
    type: Number
  },
  eighth_level_spell_slots: {
    type: Number
  },
  ninth_level_spell_slots: {
    type: Number
  },
  features_and_traits: []
});

module.exports = mongoose.model("npcs", NPCSchema);
