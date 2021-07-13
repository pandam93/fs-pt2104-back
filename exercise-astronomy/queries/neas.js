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

const getDangerousNeas = async (pha) => {
  if (!pha) {
    return false;
  }

  if (pha === "1") {
    //DANGEROUS
    try {
      return await NeasModel.find({
        pha: "Y",
        moid_au: { $lte: 0.05 },
        h_mag: { $lte: 22 },
      }).select("designation discovery_date period_yr -_id");
    } catch (error) {
      return false;
    }
  } else if (pha === "0") {
    //NOT DANGEROUS
    try {
      return await NeasModel.find({
        pha: "N",
        moid_au: { $gte: 0.05 },
        h_mag: { $gte: 22 },
      }).select("designation discovery_date period_yr -_id");
    } catch (error) {
      return false;
    }
  } else if (pha === "-1") {
    // UNKNOW
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
    if (from === undefined) {
      return await NeasModel.find({
        period_yr: {
          $lte: to,
        },
      }).select("designation discovery_date period_yr -_id");
    } else if (to === undefined) {
      return await NeasModel.find({
        period_yr: {
          $gte: from,
        },
      }).select("designation discovery_date period_yr -_id");
    }
    return await NeasModel.find({
      period_yr: {
        $gte: from,
        $lte: to,
      },
    }).select("designation discovery_date period_yr -_id");
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllNeas,
  getByClass,
  getDangerousNeas,
  getByPeriod,
};
