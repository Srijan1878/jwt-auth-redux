const router = require('express').Router();
const authController = require('../controllers/authController');
const verify = require('./verifyToken');

router.post('/register', authController.registerAuth);

router.post('/login', authController.loginAuth);

router.get('/get/:adminId', authController.getAdmin);

module.exports = router;
