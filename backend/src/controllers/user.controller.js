const userService = require('../services/user.service');

async function getUsers(req, res, next) {
  try {
    const users = await userService.findAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await userService.findUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function postUser(req, res, next) {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  postUser,
};
