// WAP to calculate the discountof a product using an arrow function
// and update the array variable containing product information
// also find out if an object is present on the array or not using function

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

console.log("Before: ", products);

const calculateDis = (price, dis) => {
    let after_disc = price - price * dis / 100;
    return after_disc;
}

products.map((prod) => {
    prod.after_discount = calculateDis(prod.price, prod.discount);
})

console.log("After: ", products);