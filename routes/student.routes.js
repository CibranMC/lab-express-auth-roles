const { roleValidation,
    rolesValidationArray } = require('../middleware/roles.middleware')
const UserModel = require('../models/User.model')
const router = require('express').Router()
const { STUDENT, DEV, TA, PM } = require('../const/user.const')


router.get('/students', roleValidation(STUDENT), (req, res, next) => {
    UserModel.find()
        .then((students) => {
            res.render('students/index', { students })
        })
})

router.get('/students/details/:idStudent', (req, res, next) => {
    const { idStudent } = req.params
    UserModel.findById(idStudent)
        .then((student) => {
            res.render('students/details', student)
        })
        .catch(next)
})


module.exports = router