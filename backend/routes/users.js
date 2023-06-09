const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.get("/:id", UsersController.GetUserName);
router.get("/account/:id", UsersController.GetUserInfo);

module.exports = router;