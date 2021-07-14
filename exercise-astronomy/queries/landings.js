const LandingModel = require("../models/Landings");

const getAllLandings = async () => {
  try {
    return await LandingModel.find({}, { __v: 0 });
  } catch (error) {
    return false;
  }
};

const getByMinimumMass = async (minMass) => {
  try {
    return await LandingModel.find({ mass: { $gte: minMass } });
  } catch (error) {
    return false;
  }
};

const getByClassName = async (recclass) => {
  try {
    return await LandingModel.find({ recclass }).select("name recclass -_id");
  } catch (error) {
    return false;
  }
};

const getByDate = async (from, to) => {
  try {
    if (!from) {
      return await LandingModel.find({
        year: {
          $lte: to,
        },
      }).select("name mass year -_id");
    } else if (!to) {
      return await LandingModel.find({
        year: {
          $gte: from,
        },
      }).select("name mass year -_id");
    }
    return await LandingModel.find({
      year: {
        $gte: from,
        $lte: to,
      },
    }).select("name mass year -_id");
  } catch (error) {
    return false;
  }
};

const getByMass = async (massToFind) => {
  try {
    return await LandingModel.find({ mass: massToFind }).select(
      "name mass -_id"
    );
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllLandings,
  getByMinimumMass,
  getByClassName,
  getByDate,
  getByMass,
};
