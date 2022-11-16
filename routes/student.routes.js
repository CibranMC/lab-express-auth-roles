const { roleValidation,
    rolesValidationArray } = require('../middleware/roles.middleware')
const UserModel = require('../models/User.model')
const router = require('express').Router()
const { STUDENT, DEV, TA, PM, ENUM_ROLES } = require('../const/user.const')


router.get('/students', rolesValidationArray(ENUM_ROLES), (req, res, next) => {
    UserModel.find()
        .then((students) => {
            res.render('students/index', { students })
        })
})

router.get('/students/details/:idStudent', rolesValidationArray(ENUM_ROLES), (req, res, next) => {
    const { idStudent } = req.params
    UserModel.findById(idStudent)
        .then((student) => {
            res.render('students/details', student)
        })
        .catch(next)
})

router.get('/students/delete/:idStudent', rolesValidationArray([PM]), (req, res, next) => {
    const { idStudent } = req.params
    UserModel.findByIdAndDelete(idStudent)
        .then(() => res.redirect('/students'))
        .catch(next)
})

router.get('/students/edit/:idStudent', rolesValidationArray([PM]), (req, res, next) => {
    const { idStudent } = req.params
    UserModel.findById(idStudent)
        .then((student) => {
            res.render('students/edit', student)
        })
        .catch(next)
})


router.post('/students/edit/:idStudent', (req, res, next) => {
    const { username, email, profileImg, description } = req.body
    const { idStudent } = req.params
    UserModel.findByIdAndUpdate(idStudent, { username, email, profileImg, description }, { new: true })
        .then(() => {
            res.redirect('/students')
        })
        .catch(next)
})

module.exports = router