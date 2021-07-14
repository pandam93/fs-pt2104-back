const { getUser } = require("../../queries/users");
const { getAge } = require("../../utils/date-hell");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;

  const result = await getUser(userAfNum);

  const age = getAge(result.birthdate);
  const { birthdate, ...data } = { ...result, age };

  if (!result) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  res.status(200).json({
    success: true,
    data,
  });
};
