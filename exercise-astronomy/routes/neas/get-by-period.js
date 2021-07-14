const { getByPeriod } = require("../../queries/neas");

module.exports = async (req, res, next) => {
  const { from, to } = req.query;
  const result = await getByPeriod(from, to);

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
