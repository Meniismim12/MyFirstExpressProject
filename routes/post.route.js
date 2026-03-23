const express = require('express')
const postModel = require('../models/post.model')
const postController = require('../controllers/post.controller')
const router = express.Router()


router.get('/get', postController.getAll)
router.post('/create', postController.create)
router.delete('/delete/:id', postController.delete)
router.put('/update/:id', postController.update)
router.get('/get/:id', postController.getOne)



module.exports = router