const router = require("express").Router();
const { single } = require("../../configs/multer");
const { checkFile } = require("../../middlewares");

const createUser = require("./create-user");
const getUser = require("./get-user");
const editUser = require("./edit-user");
const disableUser = require("./disable-user");
const deleteUser = require("./delete-user");

router.get("/:username", getUser);
router.post("/create", [single, checkFile], createUser);
router.put("/edit/:id", editUser);
router.patch("/disable/:username", disableUser);
router.delete("/delete/:username", deleteUser);

module.exports = router;
