const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userController')

router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUsersById)

router.post('/', usersController.createUser)
router.put('/:id', usersController.updateUserById)

router.delete('/:id', usersController.deleteUserById)

module.exports = router
