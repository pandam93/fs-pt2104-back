const { URL, PORT, PUBLIC } = require("../constants");

module.exports = (req, res, next) => {
  if (!req.file) {
    req.body.file = "Anonymous";
    return next();
  }

  const { filename } = req.file;
  console.log(req.file);

  req.body.file = `${URL}:${PORT}${PUBLIC}/${filename}`;

  next();
};
