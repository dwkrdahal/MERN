const express = require("express");

const app = express();

const authroutes = require('./auth.routes');
const homeroutes = require('./home.routes');
const categoryroutes = require('./category.routes');

const isLoggedIn = (req, res, next) => {
    // res.end();
    // TODO : check the logged in status

    next();
}

app.use('/', authroutes);
app.use('/', homeroutes);
app.use('/category', isLoggedIn, categoryroutes);


module.exports = app;