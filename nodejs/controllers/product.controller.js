const Product = require("../model/product.model");


class ProductController {

    addProduct = (req, res, next) => {
        let data = req.body;
        if (req.files) {
            let images = [];
            req.files.map((o) => {
                images.push(o.filename);
            })
            data.images = images;
        }

        data.after_discount = data.price - data.price * data.discount / 100;

        if (req.auth_user.role == 'seller') {
            data.seller = req.auth_user._id;
        }

        let product = new Product(data);
        product.save()
            .then((response) => {
                res.json({
                    result: product,
                    status: true,
                    msg: "Product created successfully"
                })
            })
            .catch((error) => {
                res.status(400).json({
                    result: data,
                    status: false,
                    msg: "Sorry! There was problem while adding product"
                })
            })
    }

    editProduct = (req, res, next) => {

    }

    getproductById = (req, res, next) => {

    }

    deleteProductById = (req, res, next) => {

    }

    getAllProducts = (req, res, next) => {

    }
}

module.exports = ProductController;