const router = require('express').Router();
const authController = require('../controllers/userController');
const verify = require('./verifyToken');
router.post('/add',verify, authController.addUsers);
router.get('/get',verify, authController.getUsers);
router.delete('/delete/:userId', authController.deleteUser);

module.exports = router;