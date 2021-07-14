const { addNec } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { nec } = req.body;

  const result = await addNec(userAfNum, nec);

  if (!result) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  const {
    necsDiscovered: userNecs,
    neasDiscovered: userNeas,
    badges: userBadges,
  } = result;

  req.locals = { userNecs, userNeas, userBadges };

  next();
};
