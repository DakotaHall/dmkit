const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
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
  size: {
    type: String
  },
  type: {
    type: String
  },
  subtype: {
    type: String
  },
  alignment: {
    type: String
  },
  armor_class: {
    type: Number
  },
  hit_points: {
    type: Number
  },
  hit_dice: {
    type: String
  },
  speed: {
    type: String
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
  senses: {
    type: String
  },
  languages: {
    type: String
  },
  challenge_rating: {
    type: String
  },
  special_abilities: [],
  actions: [],
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
  legendary_actions: [],
  lair_actions: [],
  regional_effects: [],
  information: "",
  spellcasting_ability: {
    type: String
  },
  spell_save_dc: {
    type: Number
  },
  spell_attack_bonus: {
    type: Number
  },
  description: {
    type: String
  },
  loot: {
    type: String
  }
});
module.exports = mongoose.model("monsters", MonsterSchema);
