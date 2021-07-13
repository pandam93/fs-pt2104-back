const { getByMass } = require("../../queries/landings");

module.exports = async (req, res, next) => {
  const { mass } = req.params;
  const result = await getByMass(mass);

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
