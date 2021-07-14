const NeasModel = require("../models/Neas");

const getAllNeas = async () => {
  try {
    return await NeasModel.find({}).select("-__v");
  } catch (error) {
    return false;
  }
};

const getByClass = async (orbit_class) => {
  try {
    return await NeasModel.find({ orbit_class }).select(
      "designation period_yr discovery_date -_id"
    );
  } catch (error) {
    return false;
  }
};

//TODO: hay que hacer el middleware que valide los datos de usuario...
const getByDate = async (from, to) => {
  try {
    if (!from && to) {
      return await NeasModel.find({
        discovery_date: {
          $lte: to,
        },
      }).select("designation discovery_date period_yr -_id");
    }
    if (!to && from) {
      return await NeasModel.find({
        discovery_date: {
          $gte: from,
        },
      }).select("designation discovery_date period_yr -_id");
    }
    if (from && to) {
      return await NeasModel.find({
        discovery_date: {
          $gte: from,
          $lte: to,
        },
      }).select("designation discovery_date period_yr -_id");
    }
  } catch (error) {
    return false;
  }
};

const getDangerousNeas = async (pha) => {
  //DANGEROUS
  if (pha === "1") {
    try {
      return await NeasModel.find({
        pha: "Y",
        moid_au: { $lte: 0.05 },
        h_mag: { $lte: 22 },
      }).select("designation discovery_date period_yr -_id");
    } catch (error) {
      return false;
    }
  }
  //NOT DANGEROUS
  if (pha === "0") {
    try {
      return await NeasModel.find({
        pha: "N",
        moid_au: { $gte: 0.05 },
        h_mag: { $gte: 22 },
      }).select("designation discovery_date period_yr -_id");
    } catch (error) {
      return false;
    }
  }
  // UNKNOW
  if (pha === "-1") {
    try {
      return await NeasModel.find({
        pha: "n/a",
      }).select("designation discovery_date period_yr -_id");
    } catch (error) {
      return false;
    }
  }
};

const getByPeriod = async (from, to) => {
  try {
    // we just got to
    if (!from && to) {
      return await NeasModel.find({
        period_yr: {
          $lte: to,
        },
      }).select("designation discovery_date period_yr -_id");
    }
    //we just got from
    if (!to && from) {
      return await NeasModel.find({
        period_yr: {
          $gte: from,
        },
      }).select("designation discovery_date period_yr -_id");
    }
    //we got both
    if (from && to) {
      return await NeasModel.find({
        period_yr: {
          $gte: from,
          $lte: to,
        },
      }).select("designation discovery_date period_yr -_id");
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllNeas,
  getByClass,
  getByDate,
  getDangerousNeas,
  getByPeriod,
};
