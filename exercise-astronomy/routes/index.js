const router = require("express").Router();

router.use("/astronomy", require("./landings"));
router.use("/astronomy", require("./neas"));
router.use("/astronomy", require("./users"));

module.exports = router;
