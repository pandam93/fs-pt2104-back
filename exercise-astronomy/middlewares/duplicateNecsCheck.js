module.exports = (req, res, next) => {
  const { nec } = req.body;
  const { userNecs } = req.locals;

  //check duplicates with the result.necsDiscovered and added nec.
  const duplicate = userNecs.find((element) => element == nec);

  if (duplicate) {
    res.status(200).json({
      success: true,
      data: "Nec alredy added!",
    });
  } else {
    next();
  }
};
