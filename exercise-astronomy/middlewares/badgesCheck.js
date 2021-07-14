const { updateBadge } = require("../queries/users");
const { BADGES } = require("../constants");

module.exports = async (req, res, next) => {
  const userAfNum = req.params.user;
  const { userBadges, userNecs, userNeas, nec, nea } = req.locals;

  let info = "Element added succesfully!";

  //check the constraints to earn the first badge
  if (!userBadges[1].given && userNeas.length === 0 && nea) {
    await updateBadge(
      userAfNum,
      BADGES.FIRST_NEA.name,
      BADGES.FIRST_NEA.points
    );
    info = `Element added. Congrats, you won ${BADGES.FIRST_NEA.points} points with the "${BADGES.FIRST_NEA.name}" badge!`;
  }

  //check the constraints to earn the second badge
  if (!userBadges[2].given && userNecs.length === 0 && nec) {
    await updateBadge(
      userAfNum,
      BADGES.FIRST_NEC.name,
      BADGES.FIRST_NEC.points
    );
    info = `Element added. Congrats, you won ${BADGES.FIRST_NEC.points} points with the "${BADGES.FIRST_NEC.name}" badge!`;
  }

  //check the constrainst to earn the third and fourth badge
  const astroDiscoverings = userNeas.length + userNecs.length;

  if (astroDiscoverings >= 5 && !userBadges[3].given) {
    await updateBadge(
      userAfNum,
      BADGES.FIVE_DISCOVERINGS.name,
      BADGES.FIVE_DISCOVERINGS.points
    );
    info = `Element added. Congrats, you won ${BADGES.FIVE_DISCOVERINGS.points} points with the "${BADGES.FIVE_DISCOVERINGS.name}" badge!`;
  }

  if (astroDiscoverings >= 10 && !userBadges[4].given) {
    await updateBadge(
      userAfNum,
      BADGES.TEN_DISCOVERINGS.name,
      BADGES.TEN_DISCOVERINGS.points
    );
    info = `Element added. Congrats, you won ${BADGES.TEN_DISCOVERINGS.points} points with the "${BADGES.TEN_DISCOVERINGS.name}" badge!`;
  }

  //check the constraint to earn the fifth badge
  const completedBadges = userBadges;

  const checkBadgesCompleted = completedBadges.reduce((acc, el) => {
    if (el.given) return acc + 1;
    else return acc;
  }, 0);

  if (!userBadges[5].given && checkBadgesCompleted === 5) {
    await updateBadge(
      userAfNum,
      BADGES.ALL_PREVIOUS_BADGES.name,
      BADGES.ALL_PREVIOUS_BADGES.points
    );
    info = `Element added. AMAZING, you won ${BADGES.ALL_PREVIOUS_BADGES.points} points with the "${BADGES.ALL_PREVIOUS_BADGES.name}" badge!`;
  }

  res.status(200).json({
    success: true,
    info,
  });
};
