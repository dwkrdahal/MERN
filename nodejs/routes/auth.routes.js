const router = require("express").Router();

router.get("/login", (req, res, next) => {
    res.render('login');

});

router.post("/register", (req, res, next) => {
    res.json({
        data: req.body
    })

});

router.post("/logout", (req, res, next) => {

});

router.get("/user/:id", (req, res, next) => {

});

module.exports = router;