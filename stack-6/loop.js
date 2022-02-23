let i = 1;

while(i <= 10) {
    console.log(i++);   // 1    
}



const products = [
    {
        title: "iPhone 12",
        category: "Phone",
        price: 120000,
        discount: 10,
        stock: 10,
        status: "Active"
    },
    {
        title: "iPhone 13",
        category: "Phone",
        price: 130000,
        discount: 10,
        stock: 10,
        status: "Active"
    },
];

let a = 0;                  // 0
let size = products.length;     // 2
while(a < size ){      //  2 <= 2
    // 2
    products[a].after_discount = products[a].price - products[a].price * products[a].discount / 100;
    a++;                // 2
    
}
// TODO: 
    let students = [
        {
            name: "Std 1",
            marks: 100,
        }, 
        {
            name: "Std 2",
            marks: 250
        }
    ]

    let total = 500

    for(let j = 0; j < students.length; j++) {
        let per = students[j].marks/total * 100;
        console.log(students[0].name + ": "+"Percent: "+per+"%")
    }

    // while loop 
    // Std 1: Percent: 20%
    // Std 2: Percent: 50%

/***
 * 
 * 1
 * 1    2
 * 1    2   3
 * 1    2   3   4
 * 1    2   3   4   5
 */