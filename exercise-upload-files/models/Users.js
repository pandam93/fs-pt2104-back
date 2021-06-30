const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  birthdate: {
    type: Date,
    unique: false,
    required: false,
  },
  profile_pic: {
    type: String,
    unique: false,
    required: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Users", userSchema);
