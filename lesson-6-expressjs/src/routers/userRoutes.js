const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userController')

router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUsersById)

router.post('/')

router.delete('/users/:id', (req, rep) => {
  const { id } = req.params
  const user = users.find((user) => user.id === id)

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }
  return res.status(200).json({
    isSuccess: true,
    message: 'delete success!',
  })
})

module.exports = router
