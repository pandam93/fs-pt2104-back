const UserModel = require("../models/Users");

const createUser = async ({ name, username, email }) => {
  return await UserModel.create({ name, username, email });
};

module.exports = {
  createUser,
};
