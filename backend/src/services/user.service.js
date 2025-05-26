const db = require('../models');    

async function findAllUsers() {
  return db.User.findAll();         
}

async function findUserById(id) {
  return db.User.findByPk(id);
}

async function createUser(data) {
  return db.User.create(data);
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
};
