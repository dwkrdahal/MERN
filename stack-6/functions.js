// definition 
// body 
// call 
function doSomething() {
    // body 
    // return ;
    // 
    console.log("I am here in doSomething.");
}
// doSomething();



function addNumbers(a, b){          //
    a = a + b;                      //
    return a;                       //
}
let a = 10;         // 100
let b = 20;         // 110
let result = addNumbers(a, b);      // 111, 30 

// console.log("Result: ", a);    // 10




function addNumbers1(){
    a = a + b;                      //
}
a = 10;         // 100
b = 20;         // 110
addNumbers1();      //  


let x = 10;
// x = 10
{
    // x = 10
    let x = 20;
    // x = 20
}
// let x = 20; // error
// x = 10

var y = 10;
// y = 10
{
    // y = 10
    var y = 20;
    // y = 20
}
// y = 20



function login(email, password){
    // login 
    // validation 
    // db query 
    if(!valid){
        return false;
    } else {
        return true;
    }
}


const validate = function() {
    // inside validate function scope
    // this 
}
// document 
// this 
// arrow function 
const afterLogin = (a) => {
    // outside as well as inside afterLogin function scope
    // this 
}

function dashboard0(a){
    return a;
}

const dashboard = a => (a);

const dashboard1 = a => {
    return a
};
const dashboard2 = a => a;

// event ui 

// console.log("Result: ", a);    // 30