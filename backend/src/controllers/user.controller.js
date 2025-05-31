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

async function updateUser(req, res, next) 
{
  try
  {
    const { id } = req.params;
    const update_user_params = req.body;

    if (!id) {
      return res.status(400).send({ message: 'Por favor, forneça um ID.' });
    }

    if (!update_user_params || Object.keys(update_user_params).length === 0) {
      return res.status(400).send({ message: 'Nenhum dado para atualizar foi fornecido.' });
    }

    const user = await userService.updateUserById(id, update_user_params);

    return res.status(200).send(user);
  }
  catch (err)
  {
    console.error(err);
    return res.status(500).send({ message: 'Erro ao atualizar usuário.', error: err.message });
  }
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
};
