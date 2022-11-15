const roleValidation = (role) => (req, res, next) => {
    if (req.session.currentUser && req.session.currentUser.role === role) {
        next()
    } else {
        res.render('not-found')
    }
}

const rolesValidationArray = (roles) => (req, res, next) => {
    if (roles.includes(req.session.role)) {
        next()
    } else {
        res.render('not-found')
    }
}

module.exports = {
    roleValidation,
    rolesValidationArray
}