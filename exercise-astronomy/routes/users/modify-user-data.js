const { modifyUserData } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { occupation, nickname } = req.body;

  console.log("oc", occupation);
  console.log("nm", nickname);

  const result = await modifyUserData(userAfNum, occupation, nickname);

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
