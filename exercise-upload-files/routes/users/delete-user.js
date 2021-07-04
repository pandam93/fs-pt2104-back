const { deleteUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { username } = req.params;

  const result = await deleteUser(username);

  res.status(200).json({
    success: true,
    data: result,
  });
};
