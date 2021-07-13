const router = require("express").Router();

const createNewUser = require("./create-new-user");
const getUser = require("./get-user");
const getUserBadges = require("./get-user-badges");
const getUserNeas = require("./get-user-neas");
const getUserNecs = require("./get-user-necs");
const getUserPoints = require("./get-user-points");
const modifyUserData = require("./modify-user-data");
const addNea = require("./add-nea");
const addNec = require("./add-nec");
const getAllUsers = require("./get-all-users");
const { badgesCheck } = require("../../middlewares");

router.post("/guild", createNewUser);

router.get("/all", getAllUsers);
router.get("/:user", getUser);
router.get("/:user/badges", getUserBadges);
router.get("/:user/neas", getUserNeas);
router.get("/:user/necs", getUserNecs);
router.get("/:user/points", getUserPoints);

router.put("/:user/edit", modifyUserData);
router.put("/:user/neas", addNea);
router.put("/:user/necs", addNec);

module.exports = router;
