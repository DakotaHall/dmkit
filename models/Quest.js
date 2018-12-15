const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  quest_giver: {
    type: String
  },
  requirements: {
    type: String
  },
  rewards: {
    type: String
  }
});

module.exports = mongoose.model("quests", QuestSchema);
