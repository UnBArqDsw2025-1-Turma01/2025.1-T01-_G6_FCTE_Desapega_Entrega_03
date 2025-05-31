const userService = require('../services/user.service');
const userFacade = require('../facades/user.facade')

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

async function updateUser(req, res, next) 
{
  try
  {
    const user = await userFacade.updateUser(req.params, req.body);
    res.status(200).json(user);
  }
  catch (err)
  {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
};
