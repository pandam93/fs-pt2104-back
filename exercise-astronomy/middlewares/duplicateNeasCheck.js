module.exports = (req, res, next) => {
  const { nea } = req.body;
  const { userNeas } = req.locals;

  //check duplicates with the result.necsDiscovered and added nec.
  const duplicate = userNeas.find((element) => element == nea);

  if (duplicate) {
    res.status(200).json({
      success: true,
      data: "Nea alredy added!",
    });
  } else {
    next();
  }
};
