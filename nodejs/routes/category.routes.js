const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controllers");
const catCtrl = new categoryController();

router.route('/')
    .post(catCtrl.createCategory)
    .get(catCtrl.getAllCategories)

router.route('/:id')
    .patch(catCtrl.updateCategoryById)
    .delete(catCtrl.deleteCategoryById)

router.get("/:id/child", catCtrl.getChildrenByCatId)

module.exports = router;