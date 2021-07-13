const mongoose = require("mongoose");
const { Schema } = mongoose;

const BadgeSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  given: {
    type: Boolean,
    required: false,
    unique: false,
  },
  info: {
    type: String,
    required: false,
    unique: false,
  },
  points: {
    type: Number,
    required: false,
    unique: false,
  },
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  nickname: {
    type: String,
    required: false,
    unique: false,
  },
  affiliatedNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  affiliationDate: {
    type: Date,
    default: new Date(),
    unique: false,
  },
  occupation: {
    type: String,
    required: false,
    unique: false,
  },
  birthdate: {
    type: Date,
    required: false,
    unique: false,
  },
  deleted: {
    type: Boolean,
    default: false,
    unique: false,
  },
  astronomicalPoints: {
    type: Number,
    default: 10,
    unique: false,
  },
  badges: [
    {
      type: BadgeSchema,
      required: false,
      unique: false,
    },
  ],
  neasDiscovered: [
    {
      type: Schema.Types.ObjectId,
      ref: "Neas",
    },
  ],
  necsDiscovered: [
    {
      type: Schema.Types.ObjectId,
      ref: "Landings",
    },
  ],
});

module.exports = mongoose.model("Users", UserSchema);
