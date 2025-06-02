const userService = require('../services/user.service');
const userFacade = require('../facades/user.facade')
const EmailUnbLoginStrategy = require('../strategy/emailUnbLogin.strategy');
const AuthService = require('../services/auth.service'); 
const UserFactory = require('../factory/userFactory');

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

const login = async (req, res) => {
  const { email, password } = req.body;
  const authService = AuthService.getInstance();
  const strategy = new EmailUnbLoginStrategy();

  try {
    const user = await authService.login(strategy, { email, password });
    const userObj = UserFactory.createUser(user);

    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        permissions: userObj.permissions()
      }
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUserById(id);
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
  login,
  deleteUser,
};
