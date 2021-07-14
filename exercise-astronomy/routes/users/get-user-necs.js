const { getUserNecs } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;

  const result = await getUserNecs(userAfNum);

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
