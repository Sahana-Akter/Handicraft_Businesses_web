const express = require('express');
const { signup, login, googleLogin } = require('../Controllers/AuthController');
const { signupValidation, loginValidation, authMiddleware } = require('../Middlewares/AuthValidation');
const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);
router.post('/google-login', googleLogin);
//router.get('/me', authMiddleware, getProfile); // Use the authMiddleware here

module.exports = router;
