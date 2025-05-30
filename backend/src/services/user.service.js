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

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
};




