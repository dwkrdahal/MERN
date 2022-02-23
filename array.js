// SIngle DImensional
let users = [
    1, 2, 3, 4
];

console.log("Third: ",users[2])

let all_users = new Array();

// Multidimensional

let multi_array = new Array(
    ["Name1","gmail1","address1"],
    ["User2","gmail2","address2"]
);

console.log(multi_array);

// insert at last index of array
users.push(5);
console.log("Users: ",users)


// last = size-1
// size

const size = users.length;
users[size] = 39;

console.log("Users: ",users)

//deleting data

// first
users.shift();
console.log("Users: ",users)


// last
users.pop();
console.log("Users: ",users)


// insert top
users.unshift("hiad");
console.log("Users: ",users)

// delete from inbetween and create empty slot
deleteusers[1];
console.log("Users: ",users)


// delete and dont create empty slot
users.splice(1,1);
console.log("Users: ",users)

// search
console.log(users.includes("Kathmandu"));