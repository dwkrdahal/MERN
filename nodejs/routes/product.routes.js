const router = require("express").Router();
const ProductController = require("../controllers/product.controller");
const prodCtrl = new ProductController;
const upload = require("../middleware/uploader.middleware");
const isLoggedIn = require('../middleware/isLoggedIn.middleware');

router.route('/')
    .post(upload.array('image'), isLoggedIn, prodCtrl.addProduct)
    .get(prodCtrl.getAllProducts);

router.route('/:id')
    .patch(upload.array('image'), prodCtrl.editProduct)
    .delete(prodCtrl.deleteProductById)
    .get(prodCtrl.getAllProducts);


module.exports = router;