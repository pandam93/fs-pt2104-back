const { createNewUser } = require("../../queries/users");

module.exports = async (req, res, next) => {
  //Agragar validaciones (?)
  const data = ({
    name,
    nickname,
    affiliatedNumber,
    affiliationDate,
    occupation,
    birthdate,
  } = req.body);

  const initialBadges = [
    {
      name: "My first day as astro-rookie!",
      given: true,
      info: "given by joining to astronomy guild",
      points: 10,
    },
    {
      name: "First NEA discovered!",
      given: false,
      info: "given by discovering your first near-earth asteroid",
      points: 100,
    },
    {
      name: "First NEC discovered!",
      given: false,
      info: "given by discovering your first near-earth comet",
      points: 100,
    },
    {
      name: "Road to NE-lhalla!",
      given: false,
      info: "given by discovering 5 Objects between NEAs and NECs",
      points: 500,
    },
    {
      name: "Master of universe!",
      given: false,
      info: "given by discovering 10 Objects between NEAs and NECs",
      points: 1000,
    },
    {
      name: "The best astronomer!",
      given: false,
      info: "given by obtaining all previous badges",
      points: 10000,
    },
  ];

  const userData = { ...data, badges: initialBadges };
  const result = await createNewUser(userData);

  if (result === false) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  res.status(200).json({
    success: true,
    data: result,
  });
};
