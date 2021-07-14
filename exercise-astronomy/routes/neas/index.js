const router = require("express").Router();

const getAllNeas = require("./get-all-neas");
const getByClass = require("./get-by-class");
const getDangerousNeas = require("./get-dangerous-neas");
const getByPeriod = require("./get-by-period");
const getByDate = require("./get-by-date");

router.get("/all", getAllNeas);

router.get("/class", getByClass);
router.get("/date/", getByDate);
router.get("/danger", getDangerousNeas);
router.get("/periods", getByPeriod);

module.exports = router;
