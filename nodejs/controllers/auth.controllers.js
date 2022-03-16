const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const getSingleRow = require('../services/db.service');
const { dbUrl, dbName } = require('../config/db.config');

class AuthController {
    login = (req, res, next) => {
        // console.log("Process: ", process.env);
        //db connect
        getSingleRow('users', {
                email: req.body.email,
                password: req.body.password
            })
            .then((response) => {
                res.json({
                    result: response,
                    status: 200,
                    msg: "Login Successful"
                })
            })
            .catch((error) => {
                next({
                    status: 400,
                    msg: "Credentials doesnot match"
                })
            })

    }

    register = (req, res, next) => {
        res.json({
            data: req.body
        })

    }

    logout = (req, res, next) => {

    }

    getUserById = (req, res, next) => {
        let id = req.params.id;
    }
}

module.exports = AuthController;