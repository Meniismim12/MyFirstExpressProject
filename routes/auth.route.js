const express = require('express');
const AuthController = require('../controllers/AuthController.controller');
const router = express.Router();

router.post('/register', AuthController.register);
router.get('/isActivated/:id', AuthController.isActivated);
module.exports = router;
