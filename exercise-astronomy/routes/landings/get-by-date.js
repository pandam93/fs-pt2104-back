const { getByDate } = require("../../queries/landings");

module.exports = async (req, res, next) => {
  const { from, to } = req.query;
  console.log(from, to);
  const result = await getByDate(from, to);

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
