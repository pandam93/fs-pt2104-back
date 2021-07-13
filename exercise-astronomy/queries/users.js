const UserModel = require("../models/Users");

const getAllUsers = async () => {
  try {
    return await UserModel.find()
      .populate("neasDiscovered", "designation")
      .populate("necsDiscovered", "name")
      .select("-_id -__v");
  } catch (error) {
    return false;
  }
};

const createNewUser = async (userData) => {
  try {
    return await UserModel.create(userData);
  } catch (error) {
    return false;
  }
};

const getUser = async (userAfNum) => {
  try {
    const user = await UserModel.findOne({
      affiliatedNumber: userAfNum,
    })
      .lean()
      // .populate("neasDiscovered", "designation -_id")
      // .populate("necsDiscovered", "name -_id")
      //TODO:
      .select(
        "name birthdate occupation affiliatedNumber astronomicalPoints affiliationDate -_id"
      );
    return user;
  } catch (error) {
    return false;
  }
};

const getUserBadges = async (userAfNum) => {
  try {
    const user = await UserModel.findOne({
      affiliatedNumber: userAfNum,
    }).select("badges -_id");
    return user;
  } catch (error) {
    return false;
  }
};

const getUserNeas = async (userAfNum) => {
  try {
    return await UserModel.findOne({
      affiliatedNumber: userAfNum,
    }).select("neasDiscovered -_id");
  } catch (error) {
    return false;
  }
};

const getUserNecs = async (userAfNum) => {
  try {
    return await UserModel.findOne({
      affiliatedNumber: userAfNum,
    }).select("necsDiscovered -_id");
  } catch (error) {
    return false;
  }
};

const getUserPoints = async (userAfNum) => {
  try {
    return await UserModel.findOne({
      affiliatedNumber: userAfNum,
    }).select("astronomicalPoints -_id");
  } catch (error) {
    return false;
  }
};

const modifyUserData = async (userAfNum, nickname, occupation) => {
  try {
    return await UserModel.findOneAndUpdate(
      { affiliatedNumber: userAfNum },
      { nickname, occupation }
    );
  } catch (error) {
    return false;
  }
};

const addNea = async (userAfNum, nea) => {
  try {
    return await UserModel.findOneAndUpdate(
      { affiliatedNumber: userAfNum },
      { $addToSet: { neasDiscovered: nea } },
      { new: true }
    );
  } catch (error) {
    return false;
  }
};

const addNec = async (userAfNum, nec) => {
  try {
    return await UserModel.findOneAndUpdate(
      { affiliatedNumber: userAfNum },
      { $addToSet: { necsDiscovered: nec } }
    );
  } catch (error) {
    return false;
  }
};

const countRegisters = async () => {
  return await UserModel.aggregate([
    { $project: { count: { $size: "$neasDiscovered" } } },
  ]);
};

const updateBadge = async (affiliatedNumber, badgeName, points) => {
  try {
    return await UserModel.findOneAndUpdate(
      { affiliatedNumber, "badges.name": badgeName },
      {
        $set: {
          "badges.$.given": true,
        },
        $inc: {
          astronomicalPoints: points,
        },
      }
    );
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUser,
  getUserBadges,
  getUserNeas,
  getUserNecs,
  getUserPoints,
  modifyUserData,
  addNea,
  addNec,
  updateBadge,
  countRegisters,
};
