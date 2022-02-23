//TODO: add 5 products in products array as an array of objects
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

// TODO: Calculate after discount value for all the objects and add attribute in the individual object
console.log("Product: ", products[0].title)
console.log("Product: ", products[1]['title'])

// TODO: 

const product = {
    title: "iPhone 12",
    category: "Phone",
    price: 120000,
    discount: 10,
    stock: 10,
    status: "Active",
    // getTitle: function() {
    //     return product.title;
    // }
};



product.after_discount = product.price - product.price * product.discount /100;

let keys = Object.keys(product);

Object.values(product).map((value) => {
    console.log(value);
})
// console.log("Keys: ", keys.length)


// let a;