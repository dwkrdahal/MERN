class categoryController {
    createCategory = (req, res, next) => {
        res.json({
            result: req.auth_user
        })
    }

    getAllCategories = (req, res, next) => {
        // logic
    }

    getCategoryById = (req, res, next) => {
        // logic
    }

    updateCategoryById = (req, res, next) => {
        // logic
    }

    deleteCategoryById = (req, res, next) => {
        // logic
    }

    getChildrenByCatId = (req, res, next) => {

    }
}

module.exports = categoryController;