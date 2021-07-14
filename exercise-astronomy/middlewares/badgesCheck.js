const { updateBadge } = require("../queries/users");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { userBadges, userNecs, userNeas } = req.locals;

  console.log(userBadges[2], userNecs.length);
  //check the constraints to earn the second badge
  if (!userBadges[2].given && userNecs.length === 0) {
    await updateBadge(userAfNum, "First NEC discovered!", 100);
  }

  //check the constrainst to earn the third and fourth badge
  const astroDiscoverings = userNeas.length + userNecs.length;

  if (astroDiscoverings >= 5 && !userBadges[3].given) {
    await updateBadge(userAfNum, "Road to NE-lhalla!", 500);
  }
  if (astroDiscoverings >= 10 && !userBadges[4].given) {
    await updateBadge(userAfNum, "Master of universe!", 1000);
  }

  //check the constraint to earn the fifth badge
  const completedBadges = userBadges;

  const checkBadgesCompleted = completedBadges.reduce((acc, el) => {
    if (el.given) return acc + 1;
    else return acc;
  }, 0);

  if (!userBadges[5].given && checkBadgesCompleted === 5) {
    await updateBadge(userAfNum, "The best astronomer!", 1000);
  }

  //TODO: agregar notificación de si se ha completado un badge, no?
  res.status(200).json({
    success: true,
    info: "Nea added succesfully!",
  });
};
