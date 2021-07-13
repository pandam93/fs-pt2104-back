const router = require("express").Router();

router.use("/api/astronomy/landings", require("./landings"));
router.use("/api/astronomy/neas", require("./neas"));
router.use("/api/astronomy/users", require("./users"));

module.exports = router;
