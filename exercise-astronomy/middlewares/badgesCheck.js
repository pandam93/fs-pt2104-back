// module.exports = (req, res, next) => {
//   console.log(res.locals.userNeas, res.locals.userNecs);

//   const updateBadge = require("../queries/users");

//   const { userNeas, userNecs, nec, badges, affiliatedNumber } = res.locals;

//   const duplicate = userNecs.find((element) => element == nec);

//   if (duplicate) {
//     res.status(200).json({
//       success: true,
//       data: "Nec alredy added!",
//     });
//     return true;
//   }

//   if (!badges[2].given && userNecs.length === 1) {
//     await updateBadge(affiliatedNumber, "First NEC discovered!", 100);
//   }

//   const astroDiscoverings = userNeas.length + userNecs.length;

//   if (astroDiscoverings >= 5 && !badges[3].given) {
//     await updateBadge(affiliatedNumber, "Road to NE-lhalla!", 500);
//   }
//   if (astroDiscoverings >= 10 && !badges[4].given) {
//     await updateBadge(affiliatedNumber, "Master of universe!", 1000);
//   }

//   const checkBadgesCompleted = badges.reduce((acc, el) => {
//     if (el.given) return acc + 1;
//     else return acc;
//   }, 0);

//   if (!badges[5].given && checkBadgesCompleted === 5) {
//     await updateBadge(affiliatedNumber, "The best astronomer!", 1000);
//   }

//   res.send();
// };
