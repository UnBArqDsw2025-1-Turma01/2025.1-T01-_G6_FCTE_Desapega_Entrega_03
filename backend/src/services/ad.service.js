const db = require('../models');

async function findAllAds() {
  return db.Ad.findAll();
}

async function findAdById(id) {
  return db.Ad.findByPk(id);
}


module.exports = {
  findAllAds,
  findAdById,  
};
