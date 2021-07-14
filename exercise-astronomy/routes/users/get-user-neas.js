const { getUserNeas } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const result = await getUserNeas(userAfNum);

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
