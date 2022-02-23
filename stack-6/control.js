// Decision making statements
/**
 * if-else
 * else-if 
 * switch-case
 * loop 
 *      while 
 *      for 
 *      for-in 
 *      for-of
 */

// truthy 
// falsy 
    // false, null, '', "", 0, undefined 

let a = false;
let b = null;
if(a) {
    // body 
    b = 123;
}
//  else {
//     // body, optional 
// }


let act = "add";        // edit, view, delete

if(act == 'add'){
    // add block
} else {
    // edit, view, delete 
    if(act == 'edit'){
        // edit 
    } else {
        // view, delete 
        if(act == 'view'){
            // view block 
        } else {
            // delete block
        }
    }
}

// else if 

if(act == 'add'){
    // add block 
} else if(act == 'edit'){
    // edit block 
} else if(act == 'view'){
    // view block
} else {
    // delete block 
}
    let marks = 250;
    let total = 500;

    // TODO: Calculate percentage
    let per = marks/total * 100;

    if(per >= 80){
        console.log("Distinction: ", per);
    } else if(per >= 60){
        console.log("First Division: ", per);
    } else if(per >= 45){
        console.log("Second Division: ", per);
    } else if(per >= 32){
        console.log("Third Division: ", per);
    } else {
        console.log("Sorry! You are failed.", per)
    }
    // TODO: Print
    /**
     * && 
     * 80 >=        => Distinction
     * <80, >= 60   => First Division
     * <60, >= 45   => Second Division
     * <45, >= 32   => Third Division
     * <32          => Sorry! You are failed
     */


    if(per >= 80){
        console.log("Distinction: ", per);
    } 

    if(per >= 60 && per < 80){
        console.log("First Division: ", per);
    } 

    if(per >= 45 && per < 60){
        console.log("Second Division: ", per);
    }
    
    if(per >= 32 && per < 45){
        console.log("Third Division: ", per);
    }
    if(per < 32){
        console.log("Sorry! You are failed.", per)
    }





// console.log("Value of b: ", b);

act = 'add';

switch(act) {
    case "add":
        // body 
        console.log("Hello there");
        break;
    case "edit":
    case "view":
        break;
    default: 
        // break;
}



let day = "wed";        // sun, sat

// day == sat , holiday, sun => holiday, 
// mon-thr  => weekday
// fir = weekend

switch(day){
    case "sun":
    case "sat":
        console.log("Holiday")
        break;
    case "fri":
        console.log("Weekend");
        break;
    default:
        console.log("Weekday")
        break
}