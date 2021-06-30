const { createUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { name, username, email } = req.body;

  const result = await createUser({ name, username, email });

  res.status(200).json({
    success: true,
    data: result,
  });
};
