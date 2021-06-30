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
    required: true,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = Users;
