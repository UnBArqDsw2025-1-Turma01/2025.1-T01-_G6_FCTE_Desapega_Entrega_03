const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.postUser);
router.patch('/:id', userController.updateUser);
router.post('/login', userController.login);
router.delete('/:id', userController.deleteUser);

module.exports = router;