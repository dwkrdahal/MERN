const express = require("express");
const router = express.Router();
const { isAdmin } = require('../middleware/rbac.middleware')


const categoryController = require("../controllers/category.controllers");
const catCtrl = new categoryController();

router.route('/')
    .post(isAdmin, catCtrl.createCategory)
    .get(catCtrl.getAllCategories)

router.route('/:id')
    .patch(catCtrl.updateCategoryById)
    .delete(catCtrl.deleteCategoryById)

router.get("/:id/child", catCtrl.getChildrenByCatId)

module.exports = router;