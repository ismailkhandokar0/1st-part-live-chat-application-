//external imports 
const express = require('express')


//internal imports 
const{
getUsers,
addUser
} = require('../controller/userController')
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse')
const avatarUpload = require('../middleware/users/avatarUpload')
const {
    addUserValidator,
    addUserValidationHandler
} = require('../middleware/users/userValidator')

const router = express.Router()  

router.get('/',decorateHtmlResponse('HOme'),getUsers)

router.post('/',avatarUpload,addUserValidator,addUserValidationHandler,addUser)






module.exports = router