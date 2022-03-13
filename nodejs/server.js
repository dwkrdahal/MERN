// protocol
// http, https
// portNo: http -> 80, https -> 443

const http = require("http");

const app = http.createServer((req, res) => {
    // console.log("Req: ", req);

    // console.log("Req method: ", req.method);
    // console.log("Req url: ", req.url);

    let method = req.method;
    let url = req.url;

    if (method = "GET" && url == "/") {
        // this is for home page
        res.end("Home");
    } else if (method == "GET") {
        // about page
        res.end("About");
    } else {
        res.end("404 not found");
    }
    // res.end("Test");
});

app.listen(9000, 'localhost', (err) => {
    if (err) {
        console.log("Error in listening to port");
    } else {
        console.log("SERVER is running in port:9000");
        console.log("Press CTRL+C to end server");
    }
});