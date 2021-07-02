const router = require("express").Router();
const { single } = require("../../configs/multer");
const { checkFile } = require("../../middlewares");

const createUser = require("./create-user");
const getUser = require("./get-user");
const editUser = require("./edit-user");

router.get("/:username", getUser);
router.post("/create", [single, checkFile], createUser);
router.put("/edit/:id", editUser);

module.exports = router;
