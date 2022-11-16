const rolesValidationArray = (roles) => (req, res, next) => {
    if (req.session.currentUser && roles.includes(req.session.currentUser.role)) {
        next()
    } else {
        res.redirect('/registro')
    }
}

module.exports = {
    rolesValidationArray
}