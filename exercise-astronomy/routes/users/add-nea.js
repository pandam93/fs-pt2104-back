const { addNea } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { nea } = req.body;

  const result = await addNea(userAfNum, nea);

  if (!result) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  console.log(result);

  const {
    necsDiscovered: userNecs,
    neasDiscovered: userNeas,
    badges: userBadges,
  } = result;

  req.locals = { userNecs, userNeas, userBadges, nea };

  next();
};
