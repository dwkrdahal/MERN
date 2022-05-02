const router = require("express").Router();
const AuthController = require("../controllers/auth.controllers");
const authCtrl = new AuthController();
const upload = require("../middleware/uploader.middleware");

router.post("/login", authCtrl.login)

router.post("/register", authCtrl.register);

router.post("/logout", upload.single('image'), authCtrl.logout);

module.exports = router;