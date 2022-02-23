const product = {
    title: "Iphone 12",
    category: "Phone",
    price: 65465,
    discount: 10,
    stock: 10,
    status: "active"
};

console.log("Title : ", product['title']); // prefered
console.log("Category : ", product.category);

product.after_discount = product.price - product.price * product.discount / 100;

console.log(product);
// TODO : Calculate after discount for all the objects value and attribute

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

console.log("Before: ",products);

products.map((prod) => {
    prod.after_discount = prod.price - prod.price * prod.discount / 100;

});

console.log("After: ",products);
