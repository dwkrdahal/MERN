const products = [{
        title: "Iphone 12",
        category: "Phone",
        price: 65465,
        discount: 10,
        stock: 10,
        status: "active"
    },
    {
        title: "Iphone 13",
        category: "Phone",
        price: 654651,
        discount: 10,
        stock: 10,
        status: "active"
    },
    {
        title: "Iphone 14",
        category: "Phone",
        price: 6546512,
        discount: 10,
        stock: 10,
        status: "active"
    },
    {
        title: "Iphone 15",
        category: "Phone",
        price: 65465123,
        discount: 10,
        stock: 10,
        status: "active"
    },
    {
        title: "Iphone 16",
        category: "Phone",
        price: 654651234,
        discount: 10,
        stock: 10,
        status: "active"
    }
];

for (let val in products) {
    console.log("Value:", val);
}

console.log("Value:")
for (let val of products) {
    console.log(val)
}

// loops through every elements of an array and returns the same

let all = [];

all = products.map(function(elem) {
    return elem;
});

console.log("map: ", all);

all = products.filter((elem) => (elem.price == 654651));
console.log("filter: ", all)