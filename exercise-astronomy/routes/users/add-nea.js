const { addNea, updateBadge, countRegisters } = require("../../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { nea } = req.body;
  const [count] = await countRegisters();

  const result = await addNea(userAfNum, nea);
  //Quizá sería mejor guardarlo en una variable de sesión o así para evitar una query innecesaria

  if (result === false) {
    return next({
      status: 500,
      info: new Error("Try again a bit later"),
    });
  }

  if ((result.neasDiscovered.length, count.count)) {
    res.status(200).json({
      success: true,
      data: "Nea alredy added!",
    });
    return true;
  }

  if (!result.badges[1].given && result.neasDiscovered.length === 1) {
    await updateBadge(result.affiliatedNumber, "First NEA discovered!", 100);
  }

  const neaDiscoverings =
    result.neasDiscovered.length + result.necsDiscovered.length;

  if (neaDiscoverings >= 5 && !result.badges[3].given) {
    await updateBadge(result.affiliatedNumber, "Road to NE-lhalla!", 500);
  }
  if (neaDiscoverings >= 10 && !result.badges[4].given) {
    await updateBadge(result.affiliatedNumber, "Master of universe!", 1000);
  }

  const completedBadges = result.badges;

  const checkBadgesCompleted = completedBadges.reduce((acc, el) => {
    if (el.given) return acc + 1;
    else return acc;
  }, 0);

  if (!result.badges[5].given && checkBadgesCompleted === 5) {
    await updateBadge(result.affiliatedNumber, "The best astronomer!", 1000);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
};
