const { getByClassName } = require("../../queries/landings");

module.exports = async (req, res, next) => {
  const { orbit_class } = req.params;
  const result = await getByClassName(orbit_class);

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
