const { getDangerousNeas } = require("../../queries/neas");

module.exports = async (req, res, next) => {
  const { pha } = req.query;

  const result = await getDangerousNeas(pha);
  console.log(result);

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
