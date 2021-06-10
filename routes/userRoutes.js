const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const authController = require('../controllers/authController');

//const authController = require('../controllers/authController');

//test

router.post('/', userController.login);

router.post('/register', authController.register);

module.exports = router;
