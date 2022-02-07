const router = require("express").Router();
const auth = require("../auth");
const AuthController = require("../controller/AuthController");

// AuthController
router.post("/login",AuthController.Login)
router.delete("/logout", auth.API, AuthController.Logout )

module.exports = router