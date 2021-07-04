const UserModel = require("../models/Users");
const { getAge } = require("../utils/date-hell");

const createUser = async ({
  name,
  username,
  email,
  birthdate,
  profile_pic,
}) => {
  return await UserModel.create({
    name,
    username,
    email,
    birthdate,
    profile_pic,
  });
};

const getUser = async (username) => {
  const { birthdate, profile_pic } = await UserModel.findOne({
    username,
    enabled: true,
  });

  let age = getAge(birthdate);

  return { username, age, profile_pic };
};

const editUser = async (id, { name, profile_pic }) => {
  return await UserModel.findOneAndUpdate(
    { _id: id },
    {
      name,
      profile_pic,
    },
    { new: true }
  ).select("-_id -__v");
};

const disableUser = async (username) => {
  return await UserModel.findOneAndUpdate(
    { username },
    {
      enabled: false,
    }
  );
};

const deleteUser = async (username) => {
  return await UserModel.deleteOne({ username });
};

module.exports = {
  createUser,
  getUser,
  editUser,
  disableUser,
  deleteUser,
};
