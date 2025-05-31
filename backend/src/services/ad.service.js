const db = require('../models');

async function findAllAds() {
  return db.Ad.findAll();
}

module.exports = {
  findAllAds,
};
