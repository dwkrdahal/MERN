const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const getSingleRow = require('../services/db.service');
const { dbUrl, dbName } = require('../config/db.config');
const User = require("../model/user.model");

class AuthController {
    login = (req, res, next) => {
        // console.log("Process: ", process.env);
        //db connect

        User.findOne({
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
        let data = req.body;

        // find user existence
        User.findOne({
                email: data.email
            })
            .then((user) => {
                if (user) {
                    next({
                        error: 400,
                        msg: "Email address already exists"
                    })
                } else {
                    let user = new User(data); // user model
                    user.save()
                        .then((ack) => {
                            res.json({
                                result: user,
                                status: true,
                                msg: "User Registered Successfully"
                            })
                        })
                        .catch((err) => {
                            res.status(404).json({
                                result: err,
                                status: false,
                                msg: "Error while registering the user"
                            })
                        })
                }
            })
            .catch((err) => {
                next({
                    status: 400,
                    msg: "Error while registering users"
                })
            })


    }

    logout = (req, res, next) => {

    }

}

module.exports = AuthController;