const mongoose = require("mongoose");
const { Schema } = mongoose;

const GeoSchema = {
  latitude: {
    type: Number,
    require: true,
  },
  longitude: {
    type: Number,
    require: true,
  },
};

const LandingSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  nametype: {
    type: String,
    required: false,
    unique: false,
  },
  recclass: {
    type: String,
    required: false,
    unique: false,
  },
  fall: {
    type: String,
    required: false,
    unique: false,
  },
  year: {
    type: String,
    required: false,
    unique: false,
  },
  id: {
    type: Number,
    required: false,
    unique: false,
  },
  mass: {
    type: Number,
    required: false,
    unique: false,
  },
  reclat: {
    type: Number,
    required: false,
    unique: false,
  },
  reclong: {
    type: Number,
    required: false,
    unique: false,
  },
  geolocation: {
    type: GeoSchema,
    require: false,
  },
});

module.exports = mongoose.model("Landings", LandingSchema);
