const express = require("express");
const router = express.Router();
const { isAdmin, isAdminSeller } = require('../middleware/rbac.middleware')


const categoryController = require("../controllers/category.controllers");
const catCtrl = new categoryController();

router.route('/')
    .post(isAdminSeller, catCtrl.createCategory)
    .get(catCtrl.getAllCategories)

router.route('/:id')
    .get(catCtrl.getCategoryById)
    .patch(catCtrl.updateCategoryById)
    .delete(catCtrl.deleteCategoryById)

router.get("/:id/child", catCtrl.getChildrenByCatId)

module.exports = router;