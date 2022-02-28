const fs = require("fs");

const file_name = "user.json";

let user = {
    name: "Diwakar Dahal",
    address: "Kavre",
    email: "itsmediwar@gmail.com"
}

// file write
fs.writeFile(file_name, JSON.stringify(user), (err, done) => {
    if (err) {
        console.log("File Write Error: ", err);
    } else {
        console.log("File Write Success: ", done);
    }
});