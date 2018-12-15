const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 50
  },
  encounter_tutorial: {
    type: Boolean
  },
  settlement_tutorial: {
    type: Boolean
  },
  encounter_add_tutorial: {
    type: Boolean
  },
  encounters: [
    {
      type: Schema.Types.ObjectId,
      ref: "encounters"
    }
  ],

  settlements: [
    {
      type: Schema.Types.ObjectId,
      ref: "settlements"
    }
  ],
  quests: [
    {
      type: Schema.Types.ObjectId,
      ref: "quests"
    }
  ],
  NPCs: [
    {
      type: Schema.Types.ObjectId,
      ref: "npcs"
    }
  ],
  monsters: [
    {
      type: Schema.Types.ObjectId,
      ref: "monsters"
    }
  ],
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "characters"
    }
  ]
});

module.exports = mongoose.model("profile", ProfileSchema);
