const { disableUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { username } = req.params;
  const result = await disableUser(username);

  res.status(200).json({
    success: true,
    data: result,
  });
};
