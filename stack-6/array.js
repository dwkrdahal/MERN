// Single Dimensional
let users = [
    1,          // 0 
    2,          // 1
    3,          // 2
    4           // 3
];


// console.log("Users: ", users)

// // console.log(typeof(users));

// let str_data = new String();

let all_users = new Array(
    ["Sandesh Bhattarai", "sandesh.bhattarai@kotuko.it", "Kathmandu"],
    ["User One", "userone@gmail.com", "Lalitpur"]
);

// console.log(all_users[0][0]);

const user = [
    "Sandesh Bhattarai", 
    "sandesh.bhattarai@kotuko.it", 
    "Kathmandu"
];

// console.log("UserName: ", user[0]);

user[0] = "User Name";

// console.log("UserName: ", user[0]);

// insert at last index of an array
user.push(123123123);

// console.log("User: ", user);

user[1] = 12342134;

// console.log("User: ", user);

// last = size-1

// size 
const size = user.length;
user[size] = "Seller";


console.log("User: ", user);
// first elem
let first = user.shift();
console.log("first: ", first);

// end element
let last = user.pop();
console.log("last: ", last);
console.log("User: ", user);

// to insert element in top 
user.unshift(last);
console.log("User: ", user);

user.splice(1,1)

// delete user[1];
console.log("User: ", user);

// find an element in an array
console.log(user.includes("Kathmandu"));

// [{},{},{}]

// user.map(()=> ());

// user.filter(()=>());

// user.reduce();

// user.sort()