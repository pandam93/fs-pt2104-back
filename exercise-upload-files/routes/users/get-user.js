const { getUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { username } = req.params;
  const result = await getUser(username);

  res.status(200).json({
    success: true,
    data: result,
  });
};
