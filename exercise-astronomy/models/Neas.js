const mongoose = require("mongoose");
const { Schema } = mongoose;

const NeasSchema = new Schema({
  designation: {
    type: String,
    required: false,
    unique: false,
  },
  discovery_date: {
    type: String,
    required: false,
    unique: false,
  },
  h_mag: {
    type: Number,
    required: false,
    unique: false,
  },
  moid_au: {
    type: Number,
    required: false,
    unique: false,
  },
  q_au_1: {
    type: Number,
    required: false,
    unique: false,
  },
  q_au_2: {
    type: Number,
    required: false,
    unique: false,
  },
  period_yr: {
    type: Number,
    required: false,
    unique: false,
  },
  i_deg: {
    type: Number,
    required: false,
    unique: false,
  },
  pha: {
    type: String,
    required: false,
    unique: false,
  },
  orbit_class: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model("Neas", NeasSchema);
