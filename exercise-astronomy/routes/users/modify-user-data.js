const { modifyUserData } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { occupation, nickname } = req.body;

  const result = await modifyUserData(userAfNum, occupation, nickname);

  console.log("> result", result);

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
