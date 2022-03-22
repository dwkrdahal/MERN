const isSeller = (req, res, next) => {
    if (req.auth_user.role == "seller") {
        next();
    } else {
        next({
            status: 403,
            msg: "User not authorized"
        })
    }
}

const isCustomer = (req, res, next) => {
    if (req.auth_user.role == "customer") {
        next();
    } else {
        next({
            status: 403,
            msg: "User not authorized"
        })
    }
}

const isAdminSeller = (req, res, next) => {
    if (req.auth_user.role == "admin" || req.auth_user.role == "seller") {
        next();
    } else {
        next({
            status: 403,
            msg: "User not authorized"
        })
    }
}

const isAdmin = (req, res, next) => {
    if (req.auth_user.role == "admin") {
        next();
    } else {
        next({
            status: 403,
            msg: "User not authorized"
        })
    }
}

module.exports = {
    isAdmin,
    isAdminSeller,
    isCustomer,
    isSeller
}