const router = require("express").Router();

/// post, http://domain/product/

router.route('/')
    .post((req, res, next) => {
        // logic
    })
    .get((req, res, next) => {
        // logic
    });

router.route('/:id')
    .patch((req, res, next) => {
        // logic
    })
    .delete((req, res, next) => {
        // logic
    })
    .get((req, res, next) => {
        // logic
    });


module.exports = router;