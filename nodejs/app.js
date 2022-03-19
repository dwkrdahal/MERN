const express = require("express");
const app = express();

// process.env.MONGO_URL = "mongodb://localhost:27017";
// process.env.DB_NAME = "stack-6";

require("./db.init");

const routes = require("./routes/index.routes");

app.set('view engine', 'pug');
app.set('view', process.cwd() + '/views')

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
const router = express.Router();

router.post('/test', (req, res, next) => {

    res.end('hello');
})

app.use(router);


app.use('/', routes);

app.use((req, res, next) => {
    next({
        status: 404,
        msg: "Resources not found"
    });
});


app.use((error, req, res, next) => {
    let code = error.status || 500;
    let msg = error.msg || null;

    res.status(code).json({
        data: null,
        status: false,
        msg: msg
    });
});

app.listen(9005, 'localhost', (err) => {
    if (!err) {
        console.log("Listening to port 9005")
    } else {
        console.log("Error")
    }
})