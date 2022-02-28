// protocol
// http, https
// portNo: http -> 80, https -> 443

const http = require("http");

const app = http.createServer();

app.listen(9000, 'localhost', (err) => {
    if (err) {
        console.log("Error in listening to port");
    } else {
        console.log("SERVER is running in port:9000");
        console.log("Press CTRL+C to end server");
    }
});