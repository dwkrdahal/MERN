/**
 * a. Arithematic Operators
 *      +, -, *, /, %
 * b. Increment or Decrement 
 *     ++, --
 * c. Assignement Operator 
 *      =, +=, -=, *=, /=, %=
 * d. String or conctiantion 
 *      +, ,
 * e. Comparision
 *      <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operator 
 *      &&, ||, !
 *  g. Conditional Or ternary
 *      (exp) ? true : false
 *      product.title ? product.title : ''
 *      product?.title
 *  h. Spread and Rest 
 *      ...
 *      
 */
let a = 10
let b = 3;

let c = a / b;        // 3.33

c = a % b;          // 1

a++;
++a;

a = a+2;
a += 2;

console.log("A: ", a + " Vlaue");          // 10
// a = a + 1;

console.log("A: ", (a + 1));   // 11, 10

// a++;            // 12
console.log("A: ", a++);      //  10, 11
console.log("A:", a);           // 11
//  ++a;            // 13
console.log("A: ", ++a);      // 12


console.log("Compare: ",  !(10 != '10')) // value Comp
console.log("Compare: ",  (10 === '10') ||  (10 !== '10'))    // value type 


let user = {
    name: '',
    email: '',
    password: '',
    status: ''
}

let student = {
    ...user,
    class: '',
    roll_no: '',
}
let status = 'active';

student.status = student.status == '' ? status : student.status;

// defaultValue={product?.title}

console.log("Status: ", student.school);
