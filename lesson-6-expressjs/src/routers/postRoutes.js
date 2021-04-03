const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', postController.getPosts)
router.get('/:id', postController.getPostById)

router.post('/', postController.createPost)

router.put('/:id', postController.updatePostById)

router.delete('/:id', postController.deletePostById)
module.exports = router
