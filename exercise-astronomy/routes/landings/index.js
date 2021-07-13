const router = require("express").Router();

const getAllLandings = require("./get-all-landings");
const getByMinimumMass = require("./get-by-minimum-mass");
const getByClassName = require("./get-by-class-name");
const getByDate = require("./get-by-date");
const getByMass = require("./get-by-mass");

router.get("/all", getAllLandings);

router.get("/mass", getByMinimumMass);
router.get("/mass/:mass", getByMass);

router.get("/class/:recclass", getByClassName);

router.get("/date", getByDate);

module.exports = router;
