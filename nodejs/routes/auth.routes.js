const router = require("express").Router();
const AuthController = require("../controllers/auth.controllers");
const authCtrl = new AuthController();

router.post("/login", authCtrl.login)

router.post("/register", authCtrl.register);

router.post("/logout", authCtrl.logout);

module.exports = router;