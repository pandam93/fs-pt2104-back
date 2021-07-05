const router = require("express").Router();

const getAllLandings = require("./get-all-landings");
const getByMinimumMass = require("./get-by-minimum-mass");
const getByClassName = require("./get-by-class-name");
const getByDate = require("./get-by-date");

router.get("/all-landings", getAllLandings);
//router.get("/:minimum-mass", getByMinimumMass);
router.get("/class/:orbit_class", getByClassName);
router.get("/", getByDate);

module.exports = router;
