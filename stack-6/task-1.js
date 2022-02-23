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

let product_1 = {
    title: "iPhone 13",
    category: "Phone",
    price: 130000,
    discount: 10,
    stock: 10,
    status: "Active"
};
console.log("Before: ", products)

// WAP to calculate the discount of a product using an arrow function
// and update the array variable containing product information
// also find out if an object is present on the array or not using function 

const calculateDis = (price, dis, index) => {
    let after_dis = price - price * dis / 100;
    products[index].after_discount = after_dis;
    // return after_dis;
}
products.map((prod, index) => {
    calculateDis(prod.price, prod.discount, index);
})

// products[0].after_discount = products[0].price - products[0].price * products[0].discount / 100;
// products[1].after_discount = products[1].price - products[1].price * products[1].discount / 100;

console.log("After: ", products)