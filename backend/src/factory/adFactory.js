const db = require('../models');

function baseAdData(data = {}) {
    return {
      title: data.title || 'Título padrão',
      description: data.description || 'Descrição padrão',
      pickupLocation: data.pickupLocation || 'Local padrão',
      userId: data.userId, // aqui você garante o ID
      ...data // pode vir com outros campos
    };
  }
  
  async function createSaleAd(data) {
    return await db.Ad.create({
      ...baseAdData(data),
      type: 'sale',
    });
  }
  
  async function createDonationAd(data) {
    return await db.Ad.create({
      ...baseAdData(data),
      type: 'donation',
    });
  }
  
  async function createExchangeAd(data) {
    return await db.Ad.create({
      ...baseAdData(data),
      type: 'exchange',
    });
  }

  module.exports = {
  createSaleAd,
  createDonationAd,
  createExchangeAd,
};