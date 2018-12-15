const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EncounterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  initiativeDisplay: [],
  characters: [],
  monsters: [],
  npcs: [],
  characterNameList: [],
  characterNames: [],
  characterNumbers: [],
  characterNamesWithNumbers: [],
  monsterNameList: [],
  monsterNames: [],
  monsterNumbers: [],
  monsterNamesWithNumbers: [],
  npcNameList: [],
  npcNames: [],
  npcNumbers: [],
  npcNamesWithNumbers: []
});

module.exports = mongoose.model("encounters", EncounterSchema);
