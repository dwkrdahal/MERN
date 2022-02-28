// Decision MAking Statements

/**
* if-else
* else-if
* switch-case
* loop
*       while

 */

// TODO: Create avariable
// let marks = 40;
// let total = 500;

// // calculate percentage
// let per = marks / total * 100;

// if (per >= 80) {
//     console.log("Distinction with ", per, " percentage");
// } else if (per >= 60) {
//     console.log("First Division with ", per, " percentage");
// } else if (per >= 45) {
//     console.log("Second Division with ", per, " percentage");
// } else if (per >= 32) {
//     console.log("Third Division with ", per, " percentage");
// } else {
//     console.log("Sorry! You are failed with ", per, " percentage");
// }

// //switch

// let day = "wed";

// // sat, sun => holiday
// // mon-thr => weekdays
// // fir => weekend

// switch (day) {
//     case "sun":
//     case "sat":
//         console.log("Holiday");
//         break;

//     case "fir":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Weekdays");
//         break;
// }

// //TO DO

let students = [{
        name: "STD 1",
        marks: 100
    },
    {
        name: "STD 2",
        marks: 250
    }
];

let size = students.length;
let percentage;
let flag = 0;

while (flag < size) {
    students[flag].percentage = students[flag].marks / 500 * 100;
    flag++;
}

console.log("Students: ", students);