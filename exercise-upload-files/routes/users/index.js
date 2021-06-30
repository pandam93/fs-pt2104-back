const router = require("express").Router();

const createUser = require("./create-user");
const helloWorld = () => console.log();

router.get("/hello", helloWorld);
router.post("/create", createUser);

module.exports = router;
