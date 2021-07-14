const { getByClass } = require("../../queries/neas");

module.exports = async (req, res, next) => {
  let { orbit_class } = req.query;

  //Por si acaso viene en minúscula.
  orbit_class = orbit_class.charAt(0).toUpperCase() + orbit_class.slice(1);

  const result = await getByClass(orbit_class);

  if (!result) {
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
