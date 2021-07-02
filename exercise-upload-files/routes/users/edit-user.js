const { editUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, profile_pic } = req.body;

  const result = await editUser(id, { name, profile_pic });

  res.status(200).json({
    success: true,
    data: result,
  });
};
