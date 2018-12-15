const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettlementSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  population: {
    type: Number
  },
  environment: {
    type: String
  },
  government: {
    type: String
  },
  commerce: {
    type: String
  },
  laws: {
    type: String
  },
  description: {
    type: String
  },
  organizations: [],
  buildings: [],
  NPCs: [],
  editedNPCs: []
});

module.exports = mongoose.model("settlements", SettlementSchema);
