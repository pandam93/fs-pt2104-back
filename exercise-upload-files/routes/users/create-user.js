const { createUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const { name, username, email, birthdate, file } = req.body;

  const result = await createUser({
    name,
    username,
    email,
    birthdate,
    profile_pic: file,
  });

  res.status(200).json({
    success: true,
    data: result,
  });
};
