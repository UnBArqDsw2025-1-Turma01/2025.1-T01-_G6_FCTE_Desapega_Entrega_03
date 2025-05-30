const db = require('../models');

async function findAllAds() {
    return db.Ad.findAll();
}

async function createAd(data) {
    return db.Ad.create(data);
}

module.exports = {
    findAllAds,
    createAd,
};

