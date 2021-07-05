const LandingModel = require("../models/Landings");

const getAllLandings = async () => {
  try {
    return await LandingModel.find({}, { _id: 0, __v: 0 });
  } catch (error) {
    return false;
  }
};

const getByMinimumMass = async () => {
  try {
    return await LandingModel.find({});
  } catch (error) {
    return false;
  }
};

const getByClassName = async (orbit_class) => {
  try {
    return await LandingModel.find({ orbit_class });
  } catch (error) {
    return false;
  }
};

const getByDate = async (from, to) => {
  try {
    console.log(from.toJSON().split("T")[0], to.toJSON().split("T")[0]);
    return await LandingModel.find({
      discovery_date: {
        $gte: from.toJSON().split("T")[0],
        $lte: to.toJSON().split("T")[0],
      },
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllLandings,
  getByMinimumMass,
  getByClassName,
  getByDate,
};
