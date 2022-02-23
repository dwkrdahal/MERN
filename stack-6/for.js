// for-in
// for-of

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
        discount: 0,
        stock: 10,
        status: "Active"
    },
];

// console.log("Products: ", products);
// key is always the index of an array
for(let key in products){
    // console.log("val: ", val);
    // to access the object, 
    // products[key];
    products[key].after_discount = products[key].price - products[key].price * products[key].discount / 100;
}

//console.log("Products: ", products);


// loops through all the elements in an array and gets the value
for(let val of products){
    //console.log("val: ", val);
}

let single = {
    title: "iPhone 13",
    category: "Phone",
    price: 130000,
    discount: 10,
    stock: 10,
    status: "Active"
};

for(let key in single){
    // console.log("Key: ", key);
}
//

let all = []
// loops through every element of an array and retuns the same 
all = products.map(function(elem) {
    return elem;
});

console.log("map: ", all);

all = products.filter((elem) => (elem.discount > 0))

console.log("Filter: ", all);


// single.map((e) => {console.log(e)});