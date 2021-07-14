const { getUserBadges } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;

  const result = await getUserBadges(userAfNum);

  if (!result) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  //Por si es dar solo los que tiene conseguidos.
  const getUserGivenBadges = result.badges.filter((element) => element.given);

  res.status(200).json({
    success: true,
    data: getUserGivenBadges,
  });
};
