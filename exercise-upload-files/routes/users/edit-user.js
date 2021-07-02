const editUser = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const { name, email, profile_pic } = req.body;

  const result = await editUser(id, { name, email, profile_pic });

  res.status(200).json({
    success: true,
    data: result,
  });
};
