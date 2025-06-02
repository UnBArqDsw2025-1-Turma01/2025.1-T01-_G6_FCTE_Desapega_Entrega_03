const db = require('../models');    
const UserFactory = require('../factory/userFactory');

async function findAllUsers() {
  return db.User.findAll();         
}

async function findUserById(id) {
  return db.User.findByPk(id);
}

async function createUser(data) {
  const userInstance = UserFactory.createUser(data);
  const userData = userInstance.toDbObject();
  return db.User.create(userData);
}

async function updateUserById(id, data) {
  const [updatedRowsCount] = await db.User.update(data, {
    where: { id }
  });

  if (updatedRowsCount === 0) {
    throw new Error('User not found or no changes detected.');
  }

  const updatedUser = await findUserById(id);
  return updatedUser;
}

async function deleteUserById(id) {
  return db.User.destroy({ where: { id } });
}


module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
};




