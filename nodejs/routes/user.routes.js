const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controllers");

const usrCtrl = new UserController;

router.route("/:id")
    .get(usrCtrl.getUserById)
    .patch(usrCtrl.updateUserById)
    .delete(usrCtrl.deleteUserById)

router.get("/", usrCtrl.getAllUsers)


module.exports = router;