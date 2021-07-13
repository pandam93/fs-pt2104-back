const { getByMinimumMass } = require("../../queries/landings");

module.exports = async (req, res, next) => {
  const { minimum_mass } = req.query;
  const result = await getByMinimumMass(minimum_mass);

  if (result === false) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  res.status(200).json({
    success: true,
    data: result,
  });
};
