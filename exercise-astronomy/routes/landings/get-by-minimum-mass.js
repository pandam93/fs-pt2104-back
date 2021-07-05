const { getByMinimumMass } = require("../../queries/landings");

module.exports = async (req, res, next) => {
  const result = await getByMinimumMass();

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
